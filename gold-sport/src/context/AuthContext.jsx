import { createContext, useContext, useEffect, useState } from 'react'

// NOTE: This is a FRONTEND-ONLY mock auth system (the project is frontend-only).
// "Accounts" are stored in localStorage. Do NOT use this approach for a real
// product — real auth needs a secure backend and hashed passwords.

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

const USERS_KEY = 'goldsport_users'
const SESSION_KEY = 'goldsport_session'

const readUsers = () => JSON.parse(localStorage.getItem(USERS_KEY) || '[]')
const writeUsers = (u) => localStorage.setItem(USERS_KEY, JSON.stringify(u))

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem(SESSION_KEY) || 'null')
  )

  useEffect(() => {
    if (user) localStorage.setItem(SESSION_KEY, JSON.stringify(user))
    else localStorage.removeItem(SESSION_KEY)
  }, [user])

  const signup = ({ name, email, password }) => {
    const users = readUsers()
    if (users.some((u) => u.email === email.toLowerCase())) {
      return { ok: false, error: 'An account with this email already exists.' }
    }
    const newUser = { name, email: email.toLowerCase(), password }
    writeUsers([...users, newUser])
    setUser({ name, email: newUser.email })
    return { ok: true }
  }

  const login = ({ email, password }) => {
    const users = readUsers()
    const found = users.find(
      (u) => u.email === email.toLowerCase() && u.password === password
    )
    if (!found) return { ok: false, error: 'Invalid email or password.' }
    setUser({ name: found.name, email: found.email })
    return { ok: true }
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, signup, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
