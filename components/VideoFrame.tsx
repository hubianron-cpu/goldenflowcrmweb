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
      ? "max-w-[330px] sm:max-w-[360px] lg:max-w-[380px]"
      : "max-w-[340px] sm:max-w-[370px] lg:max-w-[390px]";

  return (
    <div
      className={[
        "relative mx-auto w-full overflow-hidden rounded-[1.75rem] border border-gold-300/25 bg-black shadow-[0_28px_95px_rgba(0,0,0,0.46),0_0_46px_rgba(212,175,55,0.10)]",
        sizeClass,
        className,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 z-10 rounded-[1.75rem] ring-1 ring-inset ring-white/10" />
      <div className="pointer-events-none absolute inset-x-8 top-0 z-10 h-px bg-gradient-to-l from-transparent via-gold-200/60 to-transparent" />
      <video
        aria-label={title}
        autoPlay
        className="aspect-[9/16] h-auto w-full bg-black object-contain"
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
