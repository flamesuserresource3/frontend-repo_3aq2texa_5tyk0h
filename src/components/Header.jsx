import { Car, Gauge, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center gap-2 text-white">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10">
              <Car className="w-5 h-5" />
            </div>
            <span className="font-semibold tracking-tight">AeroDrive</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#variants" className="hover:text-white transition">Variants</a>
            <a href="#performance" className="hover:text-white transition flex items-center gap-2">
              <Gauge className="w-4 h-4" />
              Performance
            </a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          <button aria-label="Menu" className="md:hidden text-white" onClick={() => setOpen(!open)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-white/90">
              <a href="#variants" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 hover:bg-white/10">Variants</a>
              <a href="#performance" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 hover:bg-white/10">Performance</a>
              <a href="#contact" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 hover:bg-white/10">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
