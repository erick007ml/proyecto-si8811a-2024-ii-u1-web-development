import { useDispatch } from 'react-redux'
import { onLogin, onLogout } from '../store/auth/authSlice'
import { useAppSelector } from './hooks'

export const useAuthStore = () => {
  const { status, user, errorMessage } = useAppSelector((state) => state.auth)

  const dispatch = useDispatch()

  const loginWithGoogle = async () => {
    // dispatch(onChecking())
    // dispatch(onLogin())
  }

  const loginWithMicrosoft = async () => {
    // dispatch(onChecking())
    dispatch(onLogin({ user: 'Erick' }))
  }

  const checkAuthToken = async () => {
    // const token = localStorage.getItem('token')
    // if (!token) return dispatch(onLogout())
  }

  const startLogout = () => {
    localStorage.clear()
    dispatch(onLogout('Se ha cerrado la sesión'))
  }

  return {
    // Propiedades
    status,
    isAuthenticated: status === 'authenticated',
    user,
    errorMessage,
    // Metodos
    loginWithGoogle,
    loginWithMicrosoft,
    checkAuthToken,
    startLogout,
  }
}
