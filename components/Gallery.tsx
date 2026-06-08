import Image from "next/image";
import Reveal from "./Reveal";

const WORKS = [
  {
    src: "/images/galeria-1.jpg",
    alt: "Unhas amêndoa nude com swirls vermelhos, coraçõezinhos e detalhes em dourado",
    width: 675,
    height: 1200,
  },
  {
    src: "/images/galeria-2.jpg",
    alt: "Unhas stiletto bordô com contorno cromado prateado",
    width: 736,
    height: 1104,
  },
  {
    src: "/images/galeria-3.jpg",
    alt: "Francesinha moderna com pontas azul-bebê em unhas amêndoa",
    width: 736,
    height: 1104,
  },
  {
    src: "/images/galeria-4.jpg",
    alt: "Francesinha clássica branca em unhas amêndoa naturais",
    width: 736,
    height: 1104,
  },
  {
    src: "/images/galeria-5.jpg",
    alt: "Unhas verde-escuro com swirls brancos e detalhe leitoso",
    width: 736,
    height: 1104,
  },
  {
    src: "/images/galeria-6.jpg",
    alt: "Unhas nude leitosas com acabamento natural e brilhante",
    width: 736,
    height: 920,
  },
];

export default function Gallery() {
  return (
    <section
      id="trabalhos"
      aria-labelledby="trabalhos-titulo"
      className="bg-white/40 py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-page">
        <Reveal className="max-w-2xl">
          <p className="label-eyebrow">Portfólio</p>
          <h2
            id="trabalhos-titulo"
            className="mt-4 font-display text-[32px] leading-tight text-graphite sm:text-4xl lg:text-5xl"
          >
            Trabalhos que falam por <span className="italic text-wine">si.</span>
          </h2>
        </Reveal>

        {/* mosaico estilo Pinterest: 2 colunas no mobile, mais no desktop */}
        <div className="mt-10 columns-2 gap-4 lg:columns-3 lg:gap-6">
          {WORKS.map((work, i) => (
            <Reveal
              key={work.src}
              delay={(i % 3) * 0.08}
              className="mb-4 break-inside-avoid lg:mb-6"
            >
              <div className="group overflow-hidden rounded-2xl">
                <Image
                  src={work.src}
                  alt={work.alt}
                  width={work.width}
                  height={work.height}
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
