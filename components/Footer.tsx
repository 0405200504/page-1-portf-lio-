import { CONTACT } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-nude/30 bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-page py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <a
          href="#topo"
          className="font-display text-lg tracking-wide text-graphite"
          aria-label="Marina Alves — ir para o topo"
        >
          MARINA <span className="italic text-wine">ALVES</span>
        </a>

        <div className="flex flex-col items-center gap-1 text-sm text-graphite/70 sm:items-end">
          <span>{CONTACT.instagram}</span>
          <span>São Paulo — SP</span>
        </div>
      </div>
      <div className="border-t border-nude/20">
        <p className="mx-auto max-w-6xl px-page py-4 text-center text-xs text-graphite/50">
          © 2026 Marina Alves Nail Designer. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
