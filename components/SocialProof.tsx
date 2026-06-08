import Reveal from "./Reveal";

const STATS = [
  { value: "+800", label: "Atendimentos" },
  { value: "5.0", label: "De avaliação" },
  { value: "+5 anos", label: "De experiência" },
];

export default function SocialProof() {
  return (
    <section aria-label="Prova social" className="border-y border-nude/30 bg-cream">
      <Reveal className="mx-auto max-w-6xl px-page py-10 sm:py-12">
        <dl className="grid grid-cols-3 gap-4 text-center">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <dt className="font-display text-3xl text-wine sm:text-4xl lg:text-5xl">
                {stat.value}
              </dt>
              <dd className="mt-1.5 text-[11px] uppercase tracking-label text-graphite/60 sm:text-xs">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
