export function BrandFilmFrame() {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-gold-300/25 bg-black shadow-[0_22px_72px_rgba(0,0,0,0.42),0_0_34px_rgba(212,175,55,0.09)]">
      <video
        aria-label="סרטון המותג GoldenFlow CRM"
        autoPlay
        controls
        loop
        muted
        playsInline
        preload="metadata"
        poster="/videos/goldenflow-crm-premium-poster.webp"
        className="block aspect-video w-full bg-black object-contain"
      >
        <source src="/videos/goldenflow-crm-premium.mp4" type="video/mp4" />
        <a href="/videos/goldenflow-crm-premium.mp4">לצפייה בסרטון GoldenFlow CRM</a>
      </video>
    </div>
  );
}
