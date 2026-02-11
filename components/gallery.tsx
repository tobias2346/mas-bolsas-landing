"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

const products = [
  {
    src: "/guilbas.jpeg",
    alt: "Bolsa impresa para Guilbas Surf Shop",
  },
  {
    src: "/blackrose.jpeg",
    alt: "Bolsa impresa para Seaway",
  },
  {
    src: "/chevromar.jpeg",
    alt: "Bolsa impresa para Melek Ropa Deportiva",
  },
  {
    src: "/zl2.jpeg",
    alt: "Bolsa impresa para Audacyt Jeans",
  },
  {
    src: "/ttimy.jpeg",
    alt: "Bolsa impresa para TTIMY Indumentaria y Accesorios",
  },
  {
    src: "/aitana.jpeg",
    alt: "Bolsa impresa para Audacyt Jeans vista completa",
  },
  {
    src: "/935.jpeg",
    alt: "Bolsa impresa para 935 Boulevard",
  },
  {
    src: "/lolo2.jpeg",
    alt: "Bolsa impresa para Karcher - Miguel Horni",
  },
  {
    src: "/indico.jpeg",
    alt: "Bolsa impresa para Indico Surf Skate",
  },
]

export function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  return (
    <section id="trabajos" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            Portfolio
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Nuestros trabajos
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Cada bolsa es una pieza unica que refleja la identidad de tu marca.
            Mirá algunos de los trabajos que realizamos para nuestros clientes.
          </p>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {products.map((product, index) => (
            <button
              key={index}
              type="button"
              className="group relative mb-4 block w-full cursor-pointer overflow-hidden rounded-xl break-inside-avoid"
              onClick={() => setLightbox(index)}
            >
              <Image
                src={product.src || "/placeholder.svg"}
                alt={product.alt}
                width={600}
                height={800}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada de imagen"
        >
          <button
            type="button"
            className="absolute top-6 right-6 rounded-full bg-card p-2 text-card-foreground transition-opacity hover:opacity-80"
            onClick={() => setLightbox(null)}
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>
          <Image
            src={products[lightbox].src || "/placeholder.svg"}
            alt={products[lightbox].alt}
            width={800}
            height={1067}
            className="max-h-[85vh] w-auto rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
