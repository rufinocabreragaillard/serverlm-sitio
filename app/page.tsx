import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-full">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[var(--gray-light)]">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <Image
            src="/logo_Server_LM.png"
            alt="Server LM"
            width={480}
            height={160}
            className="h-32 w-auto"
          />
          <div className="flex items-center gap-6 text-sm text-[var(--gray-mid)]">
            <a href="#que-hace" className="hover:text-[var(--foreground)] transition-colors">Producto</a>
            <a href="#quienes-somos" className="hover:text-[var(--foreground)] transition-colors">Nosotros</a>
            <a href="#pricing" className="hover:text-[var(--foreground)] transition-colors">Planes</a>
            <a
              href="#registro"
              className="bg-[var(--accent)] text-white text-sm px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
            >
              Probar gratis
            </a>
          </div>
        </div>
      </nav>

      {/* SECCIÓN 1: QUÉ HACE */}
      <section id="que-hace" className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium text-[var(--accent)] uppercase tracking-widest mb-4">
            Como NotebookLM, pero para ti y toda tu organización
          </p>
          <h1 className="text-5xl font-bold text-[var(--gray-dark)] leading-tight mb-6">
            Conversa con tus documentos
          </h1>
          <p className="text-lg text-[var(--gray-mid)] leading-relaxed mb-10">
            Server LM conecta a cada persona con sus propios datos, o los datos de su empresa
            con los documentos que necesita — y solo con esos. Un contador habla con sus facturas.
            Un abogado con sus contratos. Un gerente con sus reportes. Cada uno ve lo suyo,
            sin filtros manuales ni configuraciones complejas.
          </p>
          <a
            href="#registro"
            className="inline-block bg-[var(--accent)] text-white px-8 py-3 rounded-md text-base font-medium hover:opacity-90 transition-opacity"
          >
            Probar gratis — 15 días
          </a>
        </div>

        {/* Bullets */}
        <div className="max-w-4xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Conversación natural",
              desc: "Pregunta en lenguaje normal, obtén respuestas desde tus documentos.",
            },
            {
              title: "Acceso controlado",
              desc: "Cada usuario ve solo lo que su cargo y área permiten. Sin configuraciones manuales.",
            },
            {
              title: "Cualquier escala",
              desc: "Desde un profesional independiente hasta una corporación con millones de documentos.",
            },
          ].map((item) => (
            <div key={item.title} className="text-left p-6 border border-[var(--gray-light)] rounded-lg">
              <div className="w-2 h-2 rounded-full bg-[var(--accent)] mb-4" />
              <h3 className="font-semibold text-[var(--gray-dark)] mb-2">{item.title}</h3>
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
            Quiénes somos
          </p>
          <h2 className="text-3xl font-bold text-[var(--gray-dark)] mb-6">
            Agencia AAS
          </h2>
          <p className="text-lg text-[var(--gray-mid)] leading-relaxed">
            Tenemos más de 40 años de experiencia transformando nuestro valor y
            navegando exitosamente las olas tecnológicas.
          </p>
        </div>
      </section>

      <div className="border-t border-[var(--gray-light)]" />

      {/* SECCIÓN 3: PRICING */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[var(--accent)] uppercase tracking-widest mb-4">
              Planes
            </p>
            <h2 className="text-3xl font-bold text-[var(--gray-dark)]">
              El plan que necesitas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Personal",
                desc: "Para profesionales independientes.",
                tokens: "1M tokens / mes",
                docs: "5.000 documentos",
                features: ["Conversación con tus documentos", "Focos en lenguaje natural"],
                cta: "Probar gratis",
                highlight: false,
              },
              {
                name: "Team",
                desc: "Para equipos que colaboran.",
                tokens: "120M tokens / mes",
                docs: "50.000 documentos",
                features: ["Todo en Personal", "Control por área"],
                cta: "Probar gratis",
                highlight: false,
              },
              {
                name: "Enterprise",
                desc: "Para empresas con control avanzado.",
                tokens: "10M tokens base + extras",
                docs: "500.000 documentos",
                features: [
                  "Todo en Team",
                  "Control por área y cargo",
                  "Servidor cliente local",
                  "Personalización",
                  "Elección de LLMs",
                ],
                cta: "Contactar",
                highlight: true,
              },
              {
                name: "Corp",
                desc: "Para corporaciones y holdings.",
                tokens: "20M tokens base + extras",
                docs: "1.000.000+ documentos",
                features: [
                  "Todo en Enterprise",
                  "Multi-entidad (Holdings)",
                  "Storage propio",
                ],
                cta: "Contactar",
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col p-6 rounded-lg border ${
                  plan.highlight
                    ? "border-[var(--accent)] bg-[var(--accent-light)]"
                    : "border-[var(--gray-light)]"
                }`}
              >
                {plan.highlight && (
                  <span className="text-xs font-semibold text-[var(--accent)] uppercase tracking-widest mb-2">
                    Más popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-[var(--gray-dark)] mb-1">{plan.name}</h3>
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
                  href="#registro"
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
            Empieza hoy
          </p>
          <h2 className="text-3xl font-bold text-[var(--gray-dark)] mb-3">
            15 días gratis
          </h2>
          <p className="text-[var(--gray-mid)] mb-8">
            Sin compromiso. Cancela cuando quieras.
          </p>
          <form className="flex flex-col gap-4 text-left">
            <input
              type="email"
              placeholder="tu@email.com"
              className="w-full px-4 py-3 border border-[var(--gray-light)] rounded-md text-sm focus:outline-none focus:border-[var(--accent)]"
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full px-4 py-3 border border-[var(--gray-light)] rounded-md text-sm focus:outline-none focus:border-[var(--accent)]"
            />
            <button
              type="submit"
              className="w-full bg-[var(--accent)] text-white py-3 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Crear cuenta gratis
            </button>
            <p className="text-xs text-center text-[var(--gray-mid)]">
              Al registrarte aceptas nuestros términos de uso. Se solicitará método de pago al activar tu plan y no se cobrará durante el periodo de prueba. Solamente se cobrará (y se avisará) si entras al sistema después del vencimiento del período de prueba. Puedes cancelar la suscripción en cualquier momento.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[var(--gray-light)] py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Image
            src="/logo_ServerLM_gris.png"
            alt="Server LM"
            width={80}
            height={28}
            className="h-6 w-auto opacity-60"
          />
          <p className="text-xs text-[var(--gray-mid)]">
            © {new Date().getFullYear()} Server LM — Agencia AAS. Todos los derechos reservados.
          </p>
        </div>
      </footer>

    </main>
  );
}
