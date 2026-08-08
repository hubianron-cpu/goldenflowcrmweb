type VideoFrameProps = {
  src: string;
  title: string;
  placement?: "hero" | "section";
  className?: string;
};

export function VideoFrame({
  src,
  title,
  placement = "section",
  className = "",
}: VideoFrameProps) {
  const sizeClass =
    placement === "hero"
      ? "max-w-[280px] sm:max-w-[310px] lg:max-w-[320px]"
      : "max-w-[300px] sm:max-w-[330px] lg:max-w-[350px] xl:max-w-[360px]";
  const maxHeight =
    placement === "hero" ? "min(570px, 68vh)" : "min(640px, 74vh)";

  return (
    <div
      className={[
        "relative mx-auto aspect-[9/16] w-full overflow-hidden rounded-[1.75rem] border border-gold-300/25 bg-black p-2 shadow-[0_22px_72px_rgba(0,0,0,0.42),0_0_34px_rgba(212,175,55,0.09)] sm:p-3",
        sizeClass,
        className,
      ].join(" ")}
      style={{ maxHeight }}
    >
      <div className="pointer-events-none absolute inset-0 z-10 rounded-[1.75rem] ring-1 ring-inset ring-white/10" />
      <div className="pointer-events-none absolute inset-x-8 top-0 z-10 h-px bg-gradient-to-l from-transparent via-gold-200/60 to-transparent" />
      <video
        aria-label={title}
        autoPlay
        className="h-full w-full rounded-[1.25rem] bg-black object-contain object-center brightness-[1.08] contrast-[1.04]"
        loop
        muted
        playsInline
        preload="metadata"
        src={src}
      >
        הדפדפן שלך אינו תומך בהצגת וידאו.
      </video>
    </div>
  );
}
