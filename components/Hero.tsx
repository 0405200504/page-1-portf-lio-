"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { WHATSAPP_LINK } from "@/lib/site";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      id="topo"
      className="relative overflow-hidden pb-16 pt-28 sm:pb-24 lg:pb-32 lg:pt-36"
      aria-label="Apresentação"
    >
      {/* detalhe decorativo de fundo (desktop) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-24 hidden h-96 w-96 rounded-full bg-nude/15 blur-3xl lg:block"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-page lg:grid-cols-12 lg:gap-8">
        {/* texto */}
        <div className="order-2 lg:order-1 lg:col-span-7">
          <motion.p {...fadeUp(0)} className="label-eyebrow">
            Nail Designer · São Paulo-SP
          </motion.p>

          <motion.h1
            {...fadeUp(0.1)}
            className="mt-5 font-display text-[34px] leading-[1.1] text-graphite sm:text-5xl lg:text-6xl"
          >
            Suas mãos merecem ser{" "}
            <span className="italic text-wine">uma obra de arte.</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-5 max-w-xl text-base leading-relaxed text-graphite/70 sm:text-lg"
          >
            Alongamento em gel, blindagem e nail art com acabamento impecável e
            durabilidade real.
          </motion.p>

          <motion.div
            {...fadeUp(0.3)}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[48px] w-full items-center justify-center rounded-full bg-wine px-7 py-3.5 text-base font-medium text-cream transition-opacity hover:opacity-90 sm:w-auto"
            >
              Agendar meu horário
            </a>
            <a
              href="#trabalhos"
              className="flex min-h-[48px] w-full items-center justify-center rounded-full border border-graphite/20 px-7 py-3.5 text-base font-medium text-graphite transition-colors hover:border-wine hover:text-wine sm:w-auto"
            >
              Ver trabalhos
            </a>
          </motion.div>
        </div>

        {/* imagem */}
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2 lg:col-span-5"
        >
          <div className="relative">
            <div
              style={{ aspectRatio: "4/5" }}
              className="relative w-full overflow-hidden rounded-2xl shadow-[0_30px_60px_-30px_rgba(110,34,51,0.35)]"
            >
              <Image
                src="/images/marina-retrato.png"
                alt="Marina Alves, nail designer, sorrindo e segurando uma lixa de unha no ateliê"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
              />
            </div>
            {/* selo flutuante decorativo */}
            <div className="absolute -bottom-5 -left-4 hidden rounded-2xl bg-wine px-5 py-3 text-cream shadow-lg sm:block">
              <p className="font-display text-2xl leading-none">5.0★</p>
              <p className="mt-1 text-[11px] uppercase tracking-label text-cream/80">
                Avaliação
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
