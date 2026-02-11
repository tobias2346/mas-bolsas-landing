'use client';

import { MapPin, Phone, Instagram } from "lucide-react"

export function Contact() {
  return (
    <section
      id="contacto"
      className="border-t border-border bg-secondary px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            Contacto
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-secondary-foreground md:text-5xl">
            Hablemos de tu proyecto
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Contanos que necesitas y te armamos un presupuesto a medida. Respondemos en menos de 24 horas.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact form */}
          <form
            className="flex flex-col gap-5 rounded-xl border border-border bg-card p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-card-foreground"
              >
                Nombre
              </label>
              <input
                id="name"
                type="text"
                placeholder="Tu nombre o el de tu negocio"
                className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-card-foreground"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="tu@email.com"
                className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-card-foreground"
              >
                Telefono
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="223 XXX XXXX"
                className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-card-foreground"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder={"Contanos qu\u00e9 tipo de bolsa necesit\u00e1s, cantidad, tama\u00f1o, colores..."}
                className="resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Enviar mensaje
            </button>
          </form>

          {/* Contact info */}
          <div className="flex flex-col justify-center gap-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-secondary-foreground">
                  {"Ubicaci\u00f3n"}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Mar del Plata, Buenos Aires, Argentina
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Instagram className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-secondary-foreground">
                  Instagram
                </h3>
                <a
                  href="https://instagram.com/masbolsas_mdp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-sm text-primary hover:underline"
                >
                  @masbolsas_mdp
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-secondary-foreground">
                  WhatsApp
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Escribinos por WhatsApp para una respuesta inmediata.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <p className="text-sm font-medium text-card-foreground">
                {"Horarios de atenci\u00f3n"}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Lunes a Viernes: 8:00 - 18:00<br />
                {"S\u00e1bados: 9:00 - 13:00"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
