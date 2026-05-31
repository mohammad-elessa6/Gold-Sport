import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {
  Zap, ShoppingCart, Heart, Sun, Moon, Menu, X, LogOut, User,
} from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { useAuth } from '../context/AuthContext'
import { CATEGORIES } from '../data/products'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { count } = useCart()
  const { count: wishCount } = useWishlist()
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [menuUser, setMenuUser] = useState(false)

  const links = [{ slug: '', label: 'Home' }, ...CATEGORIES]

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const linkClass = ({ isActive }) =>
    `relative font-medium transition-colors hover:text-electric-500 ${
      isActive ? 'text-electric-500' : 'text-slate-600 dark:text-slate-300'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 dark:border-slate-800/70 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5">
        {/* Logo -> Home */}
        <Link to="/" className="flex shrink-0 items-center gap-2 text-2xl font-display font-bold">
          <Zap className="text-glow drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]" size={26} />
          <span>GOLD <span className="text-gradient">SPORT</span></span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <NavLink key={l.slug} to={`/${l.slug}`} end={l.slug === ''} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <button onClick={toggleTheme} aria-label="Toggle theme"
            className="rounded-xl p-2.5 text-slate-600 transition hover:bg-slate-100 hover:text-electric-500 dark:text-slate-300 dark:hover:bg-slate-800">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link to="/wishlist" aria-label="Wishlist"
            className="relative rounded-xl p-2.5 text-slate-600 transition hover:bg-slate-100 hover:text-electric-500 dark:text-slate-300 dark:hover:bg-slate-800">
            <Heart size={20} />
            {wishCount > 0 && <Badge>{wishCount}</Badge>}
          </Link>

          <Link to="/cart" aria-label="Cart"
            className="relative rounded-xl p-2.5 text-slate-600 transition hover:bg-slate-100 hover:text-electric-500 dark:text-slate-300 dark:hover:bg-slate-800">
            <ShoppingCart size={20} />
            {count > 0 && <Badge>{count}</Badge>}
          </Link>

          {/* Account (only shown once signed in — the gate guarantees this) */}
          <div className="relative hidden sm:block">
            <button onClick={() => setMenuUser((v) => !v)}
              className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium transition hover:border-electric-500 dark:border-slate-700">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-electric-600 text-xs font-bold text-white">
                {user?.name?.[0]?.toUpperCase() || <User size={14} />}
              </span>
              <span className="max-w-[90px] truncate">{user?.name || 'Account'}</span>
            </button>
            {menuUser && (
              <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900">
                <div className="border-b border-slate-100 px-4 py-3 text-xs text-slate-500 dark:border-slate-800">
                  Signed in as<br /><span className="font-medium text-slate-700 dark:text-slate-200">{user?.email}</span>
                </div>
                <button onClick={handleLogout}
                  className="flex w-full items-center gap-2 px-4 py-3 text-sm text-red-500 transition hover:bg-slate-50 dark:hover:bg-slate-800">
                  <LogOut size={16} /> Log out
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setOpen((v) => !v)} aria-label="Menu"
            className="rounded-xl p-2.5 text-slate-600 transition hover:bg-slate-100 lg:hidden dark:text-slate-300 dark:hover:bg-slate-800">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav className="border-t border-slate-200 px-5 py-4 lg:hidden dark:border-slate-800">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <NavLink key={l.slug} to={`/${l.slug}`} end={l.slug === ''} onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 font-medium ${isActive ? 'bg-electric-50 text-electric-600 dark:bg-electric-600/10' : 'text-slate-700 dark:text-slate-300'}`}>
                {l.label}
              </NavLink>
            ))}
            <div className="my-2 border-t border-slate-200 dark:border-slate-800" />
            <div className="px-3 py-1 text-sm text-slate-500">{user?.name} · {user?.email}</div>
            <button onClick={handleLogout} className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-left font-medium text-red-500">
              <LogOut size={18} /> Log out
            </button>
          </div>
        </nav>
      )}
    </header>
  )
}

function Badge({ children }) {
  return (
    <span className="absolute -right-0.5 -top-0.5 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-electric-600 px-1 text-[10px] font-bold text-white shadow-glow">
      {children}
    </span>
  )
}
