import Image from "next/image";
import Reveal from "./Reveal";
import { WHATSAPP_LINK } from "@/lib/site";

export default function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-titulo"
      className="mx-auto max-w-6xl px-page py-16 sm:py-24 lg:py-28"
    >
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* imagem */}
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <div
              style={{ aspectRatio: "4/5" }}
              className="relative w-full overflow-hidden rounded-2xl shadow-[0_30px_60px_-30px_rgba(110,34,51,0.3)]"
            >
              <Image
                src="/images/marina-atelie.png"
                alt="Marina Alves atendendo uma cliente em sua bancada no ateliê"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 -z-10 hidden h-full w-full rounded-2xl border border-nude/40 lg:block"
            />
          </div>
        </Reveal>

        {/* texto */}
        <Reveal delay={0.1} className="lg:col-span-7 lg:pl-6">
          <p className="label-eyebrow">Sobre a Marina</p>
          <h2
            id="sobre-titulo"
            className="mt-4 font-display text-[32px] leading-tight text-graphite sm:text-4xl lg:text-5xl"
          >
            Para mim, unha é{" "}
            <span className="italic text-wine">autoexpressão.</span>
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-graphite/75 sm:text-lg">
            <p>
              Sou a Marina, nail designer há mais de cinco anos em São Paulo. Eu
              acredito que cada par de mãos conta uma história — e o meu trabalho
              é traduzir a sua em forma, cor e acabamento.
            </p>
            <p>
              Atendo com hora marcada, em um ambiente tranquilo, com produtos de
              alta performance e técnica apurada. Aqui você não escolhe só um
              esmalte: a gente constrói juntas um visual que combina com quem
              você é. Resultado bonito, durável e do seu jeito.
            </p>
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-wine px-7 py-3.5 text-base font-medium text-cream transition-opacity hover:opacity-90 sm:w-auto"
          >
            Quero ser atendida
          </a>
        </Reveal>
      </div>
    </section>
  );
}
