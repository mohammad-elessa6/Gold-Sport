import { Link } from 'react-router-dom'
import { Zap } from 'lucide-react'
import { CATEGORIES } from '../data/products'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-900/60">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-2 text-2xl font-display font-bold">
            <Zap className="text-glow" size={24} />
            <span>GOLD <span className="text-gradient">SPORT</span></span>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-slate-500 dark:text-slate-400">
            Your trusted source for fitness gear, supplements, and sportswear.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">Shop</h4>
          <ul className="space-y-2 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link to={`/${c.slug}`} className="text-slate-600 transition hover:text-electric-500 dark:text-slate-400">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">Account</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/cart" className="text-slate-600 transition hover:text-electric-500 dark:text-slate-400">Cart</Link></li>
            <li><Link to="/wishlist" className="text-slate-600 transition hover:text-electric-500 dark:text-slate-400">Wishlist</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-5 text-center text-xs text-slate-400 dark:border-slate-800">
        © 2026 GOLD Sport. All Rights Reserved.
      </div>
    </footer>
  )
}
