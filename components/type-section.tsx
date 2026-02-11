import Image from "next/image"
import '../app/globals.css'
export interface ImageCard {
  src: string
  alt: string
}

interface ImageCardsSectionProps {
  id?: string
  title: string
  description?: string
  cards: ImageCard[]
}

export function ImageCardsSection({
  id,
  title,
  description,
  cards,
}: ImageCardsSectionProps) {
  return (
    <section id={id} className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {title}
          </h2>

          {description && (
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </div>
            {/* Horizontal scroll cards */}
        <div className="relative">
          <div
            className="
              grid grid-flow-col
              auto-cols-[85%]
              gap-6
              overflow-x-auto
              pb-4
              scroll-smooth
              snap-x snap-mandatory
              scrollbar-custom
              sm:auto-cols-[45%]
              lg:auto-cols-[32%]
            "
          >
            {cards.map((card) => (
              <div
                key={card.src}
                className="
                  snap-start
                  group relative
                  overflow-hidden
                  rounded-xl
                  border border-border
                  bg-card
                "
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={card.src || "/placeholder.svg"}
                    alt={card.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
