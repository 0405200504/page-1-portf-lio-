import Image from "next/image";
import Reveal from "./Reveal";
import { GelIcon, ArtIcon, ShieldIcon } from "./icons";

const SERVICES = [
  {
    icon: GelIcon,
    title: "Alongamento em Gel",
    description:
      "Unhas longas, resistentes e naturais, modeladas sob medida.",
    image: "/images/servico-alongamento.jpg",
    alt: "Unhas alongadas em formato amêndoa com acabamento natural nude",
  },
  {
    icon: ArtIcon,
    title: "Nail Art",
    description: "Desenhos autorais, do minimalista ao statement.",
    image: "/images/servico-nailart.jpg",
    alt: "Unhas vinho com nail art floral e detalhes dourados",
  },
  {
    icon: ShieldIcon,
    title: "Blindagem",
    description:
      "Proteção e brilho que preservam suas unhas naturais.",
    image: "/images/servico-blindagem.jpg",
    alt: "Aplicação de blindagem com pincel sobre a unha natural",
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-titulo"
      className="mx-auto max-w-6xl px-page py-16 sm:py-24 lg:py-28"
    >
      <Reveal className="max-w-2xl">
        <p className="label-eyebrow">O que eu faço</p>
        <h2
          id="servicos-titulo"
          className="mt-4 font-display text-[32px] leading-tight text-graphite sm:text-4xl lg:text-5xl"
        >
          Serviços pensados para a{" "}
          <span className="italic text-wine">sua expressão.</span>
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {SERVICES.map((service, i) => {
          const Icon = service.icon;
          return (
            <Reveal
              key={service.title}
              as="article"
              delay={i * 0.1}
              className={`group flex flex-col rounded-3xl border border-nude/30 bg-white/40 p-5 transition-colors hover:border-wine/40 sm:p-6 ${
                // no desktop, o 3º card sobe um pouco para quebrar o alinhamento
                i === 1 ? "lg:mt-8" : ""
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-wine/10 text-wine">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-2xl text-graphite">
                {service.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-graphite/70">
                {service.description}
              </p>
              <div className="relative mt-5 aspect-square w-full overflow-hidden rounded-2xl">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
