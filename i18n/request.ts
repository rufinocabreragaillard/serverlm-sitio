import { getRequestConfig } from 'next-intl/server'
import { cookies, headers } from 'next/headers'
import { defaultLocale, locales, type Locale } from './config'

function pickFromAcceptLanguage(header: string | null): Locale | null {
  if (!header) return null
  const parsed = header
    .split(',')
    .map((part) => {
      const [tag, q] = part.trim().split(';q=')
      return { tag: tag.toLowerCase(), q: q ? parseFloat(q) : 1 }
    })
    .sort((a, b) => b.q - a.q)

  for (const { tag } of parsed) {
    const base = tag.split('-')[0]
    if (locales.includes(base as Locale)) return base as Locale
  }
  return null
}

export default getRequestConfig(async () => {
  const cookieStore = await cookies()
  const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value

  let locale: Locale = defaultLocale

  if (cookieLocale && locales.includes(cookieLocale as Locale)) {
    locale = cookieLocale as Locale
  } else {
    const headerStore = await headers()
    const detected = pickFromAcceptLanguage(headerStore.get('accept-language'))
    if (detected) locale = detected
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
