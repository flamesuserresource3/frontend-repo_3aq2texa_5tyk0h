export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <h3 className="text-white font-semibold">AeroDrive</h3>
            <p className="mt-2 text-sm text-white/60 max-w-sm">Cutting-edge electric performance designed for the night. Experience the future today.</p>
          </div>
          <div>
            <h4 className="text-white/90 font-medium">Contact</h4>
            <ul className="mt-2 text-sm space-y-1">
              <li>Email: hello@aerodrive.io</li>
              <li>Phone: +1 (555) 012-3456</li>
              <li>Showroom: 88 Eclipse Ave, Night City</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white/90 font-medium">Stay in the loop</h4>
            <form className="mt-2 flex gap-2">
              <input type="email" required placeholder="Enter your email" className="w-full rounded-lg bg-white/10 border border-white/15 px-3 py-2 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
              <button className="whitespace-nowrap rounded-lg bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90">Subscribe</button>
            </form>
          </div>
        </div>
        <p className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} AeroDrive. All rights reserved.</p>
      </div>
    </footer>
  )
}
