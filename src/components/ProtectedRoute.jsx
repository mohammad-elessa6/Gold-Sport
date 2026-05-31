import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

// The "required gate": anything wrapped in this redirects to /login
// when the visitor is not signed in.
export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }
  return children
}
