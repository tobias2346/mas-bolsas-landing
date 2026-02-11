import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-12"
    >
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.56_0.11_130_/_0.08),transparent_50%),radial-gradient(circle_at_70%_80%,oklch(0.56_0.11_130_/_0.05),transparent_50%)]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
        {/* Text content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Mar del Plata, Argentina
          </span>

          <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Bolsas impresas{" "}
            <span className="text-primary">para tu marca</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Fabricamos bolsas de polietileno personalizadas con la identidad de tu
            negocio. Calidad, rapidez y el mejor precio de la ciudad.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Solicitar presupuesto
            </a>
            <a
              href="#trabajos"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-8 py-3.5 text-sm font-semibold text-card-foreground transition-colors hover:bg-secondary"
            >
              Ver trabajos
            </a>
          </div>
        </div>

        {/* Image collage */}
        <div className="relative flex flex-1 items-center justify-center">
          <div className="grid w-full max-w-md grid-cols-2 gap-3">
            <div className="relative aspect-3/4 overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/audacyt.jpeg"
                alt="Bolsa impresa para Audacyt Jeans"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 45vw, 220px"
                priority
              />
            </div>
            <div className="relative mt-8 aspect-3/4 overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/guilbas.jpeg"
                alt="Bolsa impresa para Guilbas Surf Shop"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 45vw, 220px"
                priority
              />
            </div>
            <div className="relative -mt-6 aspect-3/4 overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/karcher.jpeg"
                alt="Bolsa impresa para Karcher"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 45vw, 220px"
              />
            </div>
            <div className="relative mt-2 aspect-3/4 overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/935.jpeg"
                alt="Bolsa impresa para 935 Boulevard"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 45vw, 220px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="relative mt-16 grid w-full max-w-3xl grid-cols-3 divide-x divide-border rounded-xl border border-border bg-card p-6 md:mt-20">
        <div className="flex flex-col items-center gap-1 px-4">
          <span className="text-2xl font-bold text-foreground md:text-3xl">+200</span>
          <span className="text-xs text-muted-foreground md:text-sm">Clientes</span>
        </div>
        <div className="flex flex-col items-center gap-1 px-4">
          <span className="text-2xl font-bold text-foreground md:text-3xl">+25</span>
          <span className="text-xs text-muted-foreground md:text-sm">{"A\u00f1os de experiencia"}</span>
        </div>
        <div className="flex flex-col items-center gap-1 px-4">
          <span className="text-2xl font-bold text-foreground md:text-3xl">100%</span>
          <span className="text-xs text-muted-foreground md:text-sm">Personalizable</span>
        </div>
      </div>

      <a
        href="#trabajos"
        className="mt-10 animate-bounce text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Ver trabajos"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  )
}
