import { useState } from 'react'
import { Link, useNavigate, useLocation, Navigate } from 'react-router-dom'
import { Zap, Mail, Lock, ArrowRight } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { login, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from || '/'

  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  if (isAuthenticated) return <Navigate to="/" replace />

  const submit = (e) => {
    e.preventDefault()
    setError('')
    if (!form.email || !form.password) return setError('Please fill in all fields.')
    const res = login(form)
    if (!res.ok) return setError(res.error)
    navigate(from, { replace: true })
  }

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to access the GOLD Sport store."
    >
      <form onSubmit={submit} className="space-y-4">
        {error && <Alert>{error}</Alert>}
        <Field icon={Mail} type="email" placeholder="Email address"
          value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
        <Field icon={Lock} type="password" placeholder="Password"
          value={form.password} onChange={(v) => setForm({ ...form, password: v })} />
        <button type="submit" className="btn-primary w-full">
          Sign in <ArrowRight size={18} />
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-slate-400">
        New to GOLD Sport?{' '}
        <Link to="/signup" className="font-semibold text-electric-400 hover:text-glow">Create an account</Link>
      </p>
    </AuthShell>
  )
}

/* ---------- Shared auth UI (used by Login + Signup) ---------- */
export function AuthShell({ title, subtitle, children }) {
  return (
    <div className="mesh-bg relative flex min-h-screen items-center justify-center px-5 py-12">
      <div className="grid-overlay absolute inset-0" />
      <div className="relative w-full max-w-md animate-fade-up">
        <Link to="/login" className="mb-8 flex items-center justify-center gap-2 text-3xl font-display font-bold text-white">
          <Zap className="text-glow drop-shadow-[0_0_10px_rgba(56,189,248,0.7)]" size={30} />
          GOLD <span className="text-gradient">SPORT</span>
        </Link>
        <div className="rounded-3xl border border-slate-700/60 bg-slate-900/70 p-8 shadow-2xl backdrop-blur-xl">
          <h1 className="text-3xl font-bold text-white">{title}</h1>
          <p className="mb-7 mt-1 text-sm text-slate-400">{subtitle}</p>
          {children}
        </div>
        <p className="mt-6 text-center text-xs text-slate-500">
          🔒 You must sign in or create an account to enter the store.
        </p>
      </div>
    </div>
  )
}

export function Field({ icon: Icon, ...props }) {
  return (
    <div className="relative">
      <Icon size={18} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
      <input
        {...props}
        onChange={(e) => props.onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-700 bg-slate-800/60 py-3 pl-11 pr-4 text-white placeholder-slate-500 outline-none transition focus:border-electric-500 focus:ring-2 focus:ring-electric-500/30"
      />
    </div>
  )
}

export function Alert({ children }) {
  return (
    <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
      {children}
    </div>
  )
}
