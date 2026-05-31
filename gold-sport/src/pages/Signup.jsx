import { useState } from 'react'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import { User, Mail, Lock, ArrowRight } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { AuthShell, Field, Alert } from './Login'

export default function Signup() {
  const { signup, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [error, setError] = useState('')

  if (isAuthenticated) return <Navigate to="/" replace />

  const submit = (e) => {
    e.preventDefault()
    setError('')
    const { name, email, password, confirm } = form
    if (!name || !email || !password) return setError('Please fill in all fields.')
    if (password.length < 6) return setError('Password must be at least 6 characters.')
    if (password !== confirm) return setError('Passwords do not match.')
    const res = signup({ name, email, password })
    if (!res.ok) return setError(res.error)
    navigate('/', { replace: true })
  }

  return (
    <AuthShell title="Create account" subtitle="Join GOLD Sport and start your fitness journey.">
      <form onSubmit={submit} className="space-y-4">
        {error && <Alert>{error}</Alert>}
        <Field icon={User} type="text" placeholder="Full name"
          value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
        <Field icon={Mail} type="email" placeholder="Email address"
          value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
        <Field icon={Lock} type="password" placeholder="Password (min 6 chars)"
          value={form.password} onChange={(v) => setForm({ ...form, password: v })} />
        <Field icon={Lock} type="password" placeholder="Confirm password"
          value={form.confirm} onChange={(v) => setForm({ ...form, confirm: v })} />
        <button type="submit" className="btn-primary w-full">
          Create account <ArrowRight size={18} />
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-slate-400">
        Already have an account?{' '}
        <Link to="/login" className="font-semibold text-electric-400 hover:text-glow">Sign in</Link>
      </p>
    </AuthShell>
  )
}
