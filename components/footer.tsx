import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-accent px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <span className="text-xs font-bold text-primary-foreground">MB</span>
          </div>
          <span className="text-sm font-semibold text-accent-foreground">
            Mas Bolsas
          </span>
        </div>

        <p className="text-center text-xs text-accent-foreground/60">
          {"Mas Bolsas \u00a9 2026. Todos los derechos reservados. Mar del Plata, Argentina."}
        </p>

        <a
          href="https://instagram.com/masbolsas_mdp"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-foreground/60 transition-colors hover:text-accent-foreground"
          aria-label="Instagram"
        >
          <Instagram className="h-5 w-5" />
        </a>
      </div>
    </footer>
  )
}
