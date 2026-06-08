type ImagePlaceholderProps = {
  /** proporção da imagem, ex: "1/1", "4/5", "16/9" */
  aspectRatio?: string;
  /** descrição da foto que deveria ocupar este espaço */
  description: string;
  className?: string;
};

/**
 * Placeholder reutilizável para imagens.
 * Renderiza uma área com fundo claro, borda tracejada, ícone de imagem
 * e a descrição do conteúdo que deveria ir ali.
 */
export default function ImagePlaceholder({
  aspectRatio = "1/1",
  description,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={description}
      style={{ aspectRatio }}
      className={`flex w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-nude bg-placeholder p-5 text-center ${className}`}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C9A88A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <span className="max-w-[22ch] text-xs leading-relaxed text-graphite/60">
        {description}
      </span>
    </div>
  );
}
