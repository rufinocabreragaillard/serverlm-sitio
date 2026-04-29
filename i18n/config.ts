export const locales = ['es', 'en', 'pt', 'fr', 'de'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'es'

export const localeNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
  pt: 'Português',
  fr: 'Français',
  de: 'Deutsch',
}

export const localeShort: Record<Locale, string> = {
  es: 'ES',
  en: 'EN',
  pt: 'PT',
  fr: 'FR',
  de: 'DE',
}
