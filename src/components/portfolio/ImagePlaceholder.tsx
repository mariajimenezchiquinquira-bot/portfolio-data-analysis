export function ImagePlaceholder({ label = "Add project images here" }: { label?: string }) {
  return (
    <div className="flex aspect-video w-full items-center justify-center rounded-md border border-dashed border-card-foreground/25 px-3 text-center">
      <span className="text-xs font-medium text-card-foreground/50">{label}</span>
    </div>
  );
}

export function ImageGallery({ count, columns = 2 }: { count: number; columns?: number }) {
  return (
    <div className={`grid gap-3 ${columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2"}`}>
      {Array.from({ length: count }).map((_, i) => (
        <ImagePlaceholder key={i} />
      ))}
    </div>
  );
}

export function ProjectImageGrid({
  images,
  columns = 2,
}: {
  images: { src: string; alt: string }[];
  columns?: 1 | 2 | 3;
}) {
  const columnClass =
    columns === 1
      ? ""
      : columns === 3
        ? "grid-cols-2 sm:grid-cols-3"
        : "sm:grid-cols-2";
  return (
    <div className={`grid gap-3 ${columnClass}`}>
      {images.map((image) => (
        <a
          key={image.src}
          href={image.src}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-center overflow-hidden rounded-md"
        >
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="max-h-[420px] w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </a>
      ))}
    </div>
  );
}
