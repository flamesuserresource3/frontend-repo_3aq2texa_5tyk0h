import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[88vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Top gradient and vignette overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(1200px_600px_at_50%_0%,black,transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 flex flex-col items-start">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
          Now unveiling — NightRunner X
        </div>
        <h1 className="mt-4 text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight">
          Futuristic performance.
          <br />
          Pure driving feel.
        </h1>
        <p className="mt-4 max-w-xl text-white/80 text-base sm:text-lg">
          A sleek, dark sports coupe engineered for motion. Glide through the night with luminous accents and razor-sharp dynamics.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#variants" className="rounded-lg bg-white text-black px-5 py-2.5 font-medium shadow-lg shadow-red-500/10 hover:bg-white/90 transition">
            Explore Variants
          </a>
          <a href="#performance" className="rounded-lg bg-white/10 text-white px-5 py-2.5 font-medium border border-white/15 hover:bg-white/15 transition">
            View Specs
          </a>
        </div>
      </div>
    </section>
  )
}
