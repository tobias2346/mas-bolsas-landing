import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ImageCardsSection } from "@/components/type-section"

export default function Home() {

  const rinion = [
    {
      src: "/audacyt.jpeg",
      alt: "Bolsa camiseta de polietileno",
    },
    {
      src: "/amaranto.jpeg",
      alt: "Bolsa riñon de polietileno",
    },
    {
      src: "/bellas2.jpeg",
      alt: "Bolsa de fondo de polietileno",
    },
    {
      src: "/bim.jpeg",
      alt: "Bolsa blanca de polietileno",
    },
    {
      src: "/charlotte4.jpeg",
      alt: "Bolsa cristal transparente de polietileno",
    },
    {
      src: "/fantasia.jpeg",
      alt: "Bolsa cristal transparente de polietileno",
    },
  ]

  const camiseta = [
    {
      src: "/chevromar.jpeg",
      alt: "Bolsa camiseta de polietileno",
    },
    {
      src: "/salzano2.jpeg",
      alt: "Bolsa riñon de polietileno",
    },
    {
      src: "/chevromar2.jpeg",
      alt: "Bolsa de fondo de polietileno",
    },
    {
      src: "/salzano3.jpeg",
      alt: "Bolsa blanca de polietileno",
    },
    {
      src: "/bim2.jpeg",
      alt: "Bolsa cristal transparente de polietileno",
    },
    {
      src: "/bim4.jpeg",
      alt: "Bolsa cristal transparente de polietileno",
    },
  ]

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <ImageCardsSection
          id="tipos"
          title="Bolsas rinion"
          description="Trabajamos con distintos formatos para adaptarnos a las necesidades de cada cliente."
          cards={rinion}
        />
        <ImageCardsSection
          id="tipos"
          title="Bolsas rinion"
          description="Trabajamos con distintos formatos para adaptarnos a las necesidades de cada cliente."
          cards={camiseta}
        />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
