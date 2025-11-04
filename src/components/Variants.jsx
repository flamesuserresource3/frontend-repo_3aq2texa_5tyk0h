import { Zap, Gauge, Shield } from 'lucide-react'

const VARIANTS = [
  {
    name: 'Base — Aero S',
    price: '$59,990',
    highlights: [
      { icon: Gauge, label: '0–60 mph in 5.1s' },
      { icon: Zap, label: 'RWD, 300 mi range' },
    ],
    theme: 'from-zinc-900 to-zinc-800 border-zinc-700',
  },
  {
    name: 'Sport — Aero R',
    price: '$74,990',
    highlights: [
      { icon: Gauge, label: '0–60 mph in 3.8s' },
      { icon: Zap, label: 'AWD, 320 mi range' },
    ],
    theme: 'from-slate-900 to-neutral-800 border-slate-700',
  },
  {
    name: 'Performance — NightRunner X',
    price: '$92,500',
    highlights: [
      { icon: Gauge, label: '0–60 mph in 2.9s' },
      { icon: Zap, label: 'Dual Motor, 340 mi' },
      { icon: Shield, label: 'Carbon-ceramic brakes' },
    ],
    theme: 'from-black to-zinc-900 border-zinc-700',
  },
]

export default function Variants() {
  return (
    <section id="variants" className="relative bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Choose your drive</h2>
            <p className="mt-2 text-white/70 max-w-xl">Three carefully tuned variants designed for different styles of performance — from daily excitement to track-focused precision.</p>
          </div>
          <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white text-black px-5 py-2.5 font-medium hover:bg-white/90 transition w-max">Request a quote</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VARIANTS.map((v) => (
            <article key={v.name} className={`relative overflow-hidden rounded-2xl border p-6 bg-gradient-to-br ${v.theme}`}>
              <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-red-500/10 blur-2xl" />
              <header className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{v.name}</h3>
                <span className="text-white/80 text-sm">{v.price}</span>
              </header>
              <div className="mt-4 aspect-[16/10] rounded-xl bg-gradient-to-br from-zinc-800 to-black border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-red-500/20 border border-red-500/40" />
                  <p className="text-white/70 text-sm">Dark graphite finish, red ambient glow</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2">
                {v.highlights.map((h) => (
                  <li key={h.label} className="flex items-center gap-2 text-sm text-white/85">
                    <h.icon className="w-4 h-4 text-white/70" />
                    {h.label}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-3">
                <button className="px-4 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-white/90">Configure</button>
                <button className="px-4 py-2 rounded-lg border border-white/20 text-sm hover:bg-white/10">Compare</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
