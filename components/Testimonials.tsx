import Reveal from "./Reveal";
import { StarIcon } from "./icons";

const TESTIMONIALS = [
  {
    name: "Juliana Prado",
    text: "Meu alongamento durou semanas sem lascar e ficou super natural. A Marina tem um olhar de artista, entendeu exatamente o que eu queria.",
  },
  {
    name: "Carolina Menezes",
    text: "Atendimento impecável e ambiente acolhedor. Cheguei sem ideia e saí com uma nail art autoral que todo mundo elogia. Virei cliente fiel!",
  },
  {
    name: "Renata Lima",
    text: "Já fiz blindagem com várias profissionais, mas o acabamento da Marina é outro nível. Minhas unhas nunca estiveram tão saudáveis e bonitas.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-wine" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className="h-4 w-4" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      aria-labelledby="depoimentos-titulo"
      className="bg-white/40 py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-page">
        <Reveal className="max-w-2xl">
          <p className="label-eyebrow">Depoimentos</p>
          <h2
            id="depoimentos-titulo"
            className="mt-4 font-display text-[32px] leading-tight text-graphite sm:text-4xl lg:text-5xl"
          >
            Quem senta na cadeira, <span className="italic text-wine">volta.</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {TESTIMONIALS.map((item, i) => (
            <Reveal
              key={item.name}
              as="article"
              delay={i * 0.1}
              className="flex flex-col rounded-3xl border border-nude/30 bg-cream p-6"
            >
              <Stars />
              <p className="mt-4 flex-1 text-base leading-relaxed text-graphite/80">
                “{item.text}”
              </p>
              <p className="mt-5 font-display text-lg text-graphite">
                {item.name}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
