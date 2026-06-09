"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, WHATSAPP_LINK } from "@/lib/site";
import { MenuIcon, CloseIcon } from "./icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // fundo do header muda ao rolar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // trava o scroll do body quando o drawer está aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-cream/90 shadow-[0_1px_0_rgba(43,39,36,0.08)] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-page">
        <a
          href="#topo"
          className="font-display text-lg tracking-wide text-graphite sm:text-xl"
          aria-label="Marina Alves — ir para o topo"
        >
          MARINA <span className="italic text-wine">ALVES</span>
        </a>

        {/* navegação desktop */}
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Navegação principal"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-graphite/80 transition-colors hover:text-wine"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#" data-lume-agendar
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-wine px-5 py-2.5 text-sm font-medium text-cream transition-opacity hover:opacity-90"
          >
            Agendar
          </a>
        </nav>

        {/* botão hambúrguer (mobile/tablet) */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
          aria-expanded={open}
          aria-controls="mobile-drawer"
          className="flex h-12 w-12 items-center justify-center text-graphite lg:hidden"
        >
          <MenuIcon className="h-7 w-7" />
        </button>
      </div>

      {/* drawer lateral mobile */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-graphite/40 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação"
              className="fixed inset-y-0 right-0 z-50 flex w-[82%] max-w-xs flex-col bg-cream px-6 pb-10 pt-5 shadow-2xl lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg text-graphite">
                  MARINA <span className="italic text-wine">ALVES</span>
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Fechar menu"
                  className="flex h-12 w-12 items-center justify-center text-graphite"
                >
                  <CloseIcon className="h-7 w-7" />
                </button>
              </div>

              <nav
                className="mt-10 flex flex-col gap-2"
                aria-label="Navegação principal"
              >
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-[48px] items-center border-b border-nude/30 font-display text-2xl text-graphite transition-colors hover:text-wine"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <a
                href="#" data-lume-agendar
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-auto flex min-h-[48px] w-full items-center justify-center rounded-full bg-wine px-6 py-3.5 text-base font-medium text-cream"
              >
                Agendar pelo WhatsApp
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
