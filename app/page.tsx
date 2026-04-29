import Image from "next/image";
import { useTranslations } from "next-intl";
import { SelectorIdioma } from "../components/SelectorIdioma";

export default function Home() {
  const t = useTranslations();

  const bullets = [
    {
      titulo: t("hero.bullets.conversacion.titulo"),
      desc: t("hero.bullets.conversacion.desc"),
    },
    {
      titulo: t("hero.bullets.acceso.titulo"),
      desc: t("hero.bullets.acceso.desc"),
    },
    {
      titulo: t("hero.bullets.escala.titulo"),
      desc: t("hero.bullets.escala.desc"),
    },
  ];

  const planes = [
    {
      key: "personal",
      nombre: t("pricing.personal.nombre"),
      desc: t("pricing.personal.desc"),
      tokens: t("pricing.personal.tokens"),
      docs: t("pricing.personal.docs"),
      features: [t("pricing.personal.f1"), t("pricing.personal.f2")],
      cta: t("pricing.personal.cta"),
      ctaHref: "#registro",
      highlight: false,
    },
    {
      key: "team",
      nombre: t("pricing.team.nombre"),
      desc: t("pricing.team.desc"),
      tokens: t("pricing.team.tokens"),
      docs: t("pricing.team.docs"),
      features: [t("pricing.team.f1"), t("pricing.team.f2")],
      cta: t("pricing.team.cta"),
      ctaHref: "mailto:rufinocabreragaillard@gmail.com",
      highlight: false,
    },
    {
      key: "enterprise",
      nombre: t("pricing.enterprise.nombre"),
      desc: t("pricing.enterprise.desc"),
      tokens: t("pricing.enterprise.tokens"),
      docs: t("pricing.enterprise.docs"),
      features: [
        t("pricing.enterprise.f1"),
        t("pricing.enterprise.f2"),
        t("pricing.enterprise.f3"),
        t("pricing.enterprise.f4"),
        t("pricing.enterprise.f5"),
      ],
      cta: t("pricing.enterprise.cta"),
      ctaHref: "mailto:rufinocabreragaillard@gmail.com",
      highlight: true,
    },
    {
      key: "corp",
      nombre: t("pricing.corp.nombre"),
      desc: t("pricing.corp.desc"),
      tokens: t("pricing.corp.tokens"),
      docs: t("pricing.corp.docs"),
      features: [
        t("pricing.corp.f1"),
        t("pricing.corp.f2"),
        t("pricing.corp.f3"),
      ],
      cta: t("pricing.corp.cta"),
      ctaHref: "mailto:rufinocabreragaillard@gmail.com",
      highlight: false,
    },
  ];

  return (
    <main className="flex flex-col min-h-full">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[var(--gray-light)]">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/isotipo_serverlm.png"
              alt="Server LM"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="text-[var(--gray-dark)] font-semibold text-base tracking-tight">Server LM</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-[var(--gray-mid)]">
            <a href="#que-hace" className="hover:text-[var(--foreground)] transition-colors">{t("nav.producto")}</a>
            <a href="#quienes-somos" className="hover:text-[var(--foreground)] transition-colors">{t("nav.nosotros")}</a>
            <a href="#pricing" className="hover:text-[var(--foreground)] transition-colors">{t("nav.planes")}</a>
            <SelectorIdioma />
            <a
              href="https://app.serverlm.ai"
              className="bg-[var(--accent)] text-white text-sm px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
            >
              {t("nav.probarGratis")}
            </a>
          </div>
        </div>
      </nav>

      {/* SECCIÓN 1: QUÉ HACE */}
      <section id="que-hace" className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium text-[var(--accent)] uppercase tracking-widest mb-4">
            {t("hero.eyebrow")}
          </p>
          <h1 className="text-5xl font-bold text-[var(--gray-dark)] leading-tight mb-6">
            {t("hero.titulo")}
          </h1>
          <p className="text-lg text-[var(--gray-mid)] leading-relaxed mb-10">
            {t("hero.descripcion")}
          </p>
          <a
            href="#registro"
            className="inline-block bg-[var(--accent)] text-white px-8 py-3 rounded-md text-base font-medium hover:opacity-90 transition-opacity"
          >
            {t("hero.cta")}
          </a>
        </div>

        {/* Bullets */}
        <div className="max-w-4xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {bullets.map((item) => (
            <div key={item.titulo} className="text-left p-6 border border-[var(--gray-light)] rounded-lg">
              <div className="w-2 h-2 rounded-full bg-[var(--accent)] mb-4" />
              <h3 className="font-semibold text-[var(--gray-dark)] mb-2">{item.titulo}</h3>
              <p className="text-sm text-[var(--gray-mid)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-[var(--gray-light)]" />

      {/* SECCIÓN 2: QUIÉNES SOMOS */}
      <section id="quienes-somos" className="py-24 px-6 bg-[var(--gray-very-light)]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium text-[var(--accent)] uppercase tracking-widest mb-4">
            {t("nosotros.eyebrow")}
          </p>
          <h2 className="text-3xl font-bold text-[var(--gray-dark)] mb-2">
            {t("nosotros.marca")}
          </h2>
          <p className="text-base font-normal text-[var(--gray-mid)] mb-2">
            {t("nosotros.subtitulo")}
          </p>
          <h3 className="text-2xl font-semibold text-[var(--gray-dark)] mb-6">
            {t("nosotros.lema")}
          </h3>
          <p className="text-lg text-[var(--gray-mid)] leading-relaxed">
            {t("nosotros.descripcion")}
          </p>
        </div>
      </section>

      <div className="border-t border-[var(--gray-light)]" />

      {/* SECCIÓN 3: PRICING */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[var(--accent)] uppercase tracking-widest mb-4">
              {t("pricing.eyebrow")}
            </p>
            <h2 className="text-3xl font-bold text-[var(--gray-dark)]">
              {t("pricing.titulo")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {planes.map((plan) => (
              <div
                key={plan.key}
                className={`flex flex-col p-6 rounded-lg border ${
                  plan.highlight
                    ? "border-[var(--accent)] bg-[var(--accent-light)]"
                    : "border-[var(--gray-light)]"
                }`}
              >
                {plan.highlight && (
                  <span className="text-xs font-semibold text-[var(--accent)] uppercase tracking-widest mb-2">
                    {t("pricing.masPopular")}
                  </span>
                )}
                <h3 className="text-xl font-bold text-[var(--gray-dark)] mb-1">{plan.nombre}</h3>
                <p className="text-sm text-[var(--gray-mid)] mb-4">{plan.desc}</p>
                <p className="text-xs text-[var(--gray-mid)] mb-1">{plan.tokens}</p>
                <p className="text-xs text-[var(--gray-mid)] mb-6">{plan.docs}</p>
                <ul className="flex-1 space-y-2 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[var(--gray-dark)]">
                      <span className="text-[var(--accent)] mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.ctaHref}
                  className={`text-center py-2 rounded-md text-sm font-medium transition-opacity ${
                    plan.highlight
                      ? "bg-[var(--accent)] text-white hover:opacity-90"
                      : "border border-[var(--gray-light)] text-[var(--gray-dark)] hover:border-[var(--accent)]"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[var(--gray-light)]" />

      {/* SECCIÓN 4: REGISTRO */}
      <section id="registro" className="py-24 px-6 bg-[var(--gray-very-light)]">
        <div className="max-w-md mx-auto text-center">
          <p className="text-sm font-medium text-[var(--accent)] uppercase tracking-widest mb-4">
            {t("registro.eyebrow")}
          </p>
          <h2 className="text-3xl font-bold text-[var(--gray-dark)] mb-3">
            {t("registro.titulo")}
          </h2>
          <p className="text-[var(--gray-mid)] mb-8">
            {t("registro.subtitulo")}
          </p>
          <form className="flex flex-col gap-4 text-left">
            <input
              type="email"
              placeholder={t("registro.email")}
              className="w-full px-4 py-3 border border-[var(--gray-light)] rounded-md text-sm focus:outline-none focus:border-[var(--accent)]"
            />
            <input
              type="password"
              placeholder={t("registro.password")}
              className="w-full px-4 py-3 border border-[var(--gray-light)] rounded-md text-sm focus:outline-none focus:border-[var(--accent)]"
            />
            <a
              href="mailto:rufinocabreragaillard@gmail.com"
              className="w-full bg-[var(--accent)] text-white py-3 rounded-md text-sm font-medium hover:opacity-90 transition-opacity text-center block"
            >
              {t("registro.cta")}
            </a>
            <p className="text-xs text-center text-[var(--gray-mid)]">
              {t("registro.legal")}
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[var(--gray-light)] py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 opacity-60">
            <Image
              src="/isotipo_serverlm.png"
              alt="Server LM"
              width={20}
              height={20}
              className="h-5 w-auto"
            />
            <span className="text-xs font-semibold text-[var(--gray-dark)] tracking-tight">Server LM</span>
          </div>
          <p className="text-xs text-[var(--gray-mid)]">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </footer>

    </main>
  );
}
