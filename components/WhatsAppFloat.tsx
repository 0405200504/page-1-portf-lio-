import { WHATSAPP_LINK } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

/** Botão flutuante de WhatsApp, fixo no canto inferior direito em todas as telas. */
export default function WhatsAppFloat() {
  return (
    <a
      href="#" data-lume-agendar
      
      
      aria-label="Agendar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
