import Reveal from "./Reveal";
import { CONTACT, WHATSAPP_LINK } from "@/lib/site";
import { MapPinIcon, ClockIcon, PhoneIcon, WhatsAppIcon } from "./icons";

const INFO = [
  { icon: MapPinIcon, label: "Endereço", value: CONTACT.address },
  { icon: ClockIcon, label: "Horário", value: CONTACT.hours },
  { icon: PhoneIcon, label: "WhatsApp", value: CONTACT.phoneDisplay },
];

export default function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-titulo"
      className="mx-auto max-w-6xl px-page py-16 sm:py-24 lg:py-28"
    >
      <Reveal className="overflow-hidden rounded-3xl bg-wine px-6 py-12 text-cream sm:px-10 sm:py-14 lg:px-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-xs uppercase tracking-label text-cream/70">
              Vamos marcar?
            </p>
            <h2
              id="contato-titulo"
              className="mt-4 font-display text-[32px] leading-tight sm:text-4xl lg:text-5xl"
            >
              Reserve o seu <span className="italic">horário.</span>
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-cream/80">
              Atendimento com hora marcada. Me chame no WhatsApp e a gente
              encontra o melhor dia para você.
            </p>

            <a
              href="#" data-lume-agendar
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full bg-cream px-7 py-4 text-base font-semibold text-wine transition-opacity hover:opacity-90 sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Agendar pelo WhatsApp
            </a>
          </div>

          <dl className="flex flex-col gap-6 lg:pl-8">
            {INFO.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream/10 text-cream">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <dt className="text-xs uppercase tracking-label text-cream/60">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-base leading-relaxed text-cream/95">
                      {item.value}
                    </dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
