import { useDispatch, useSelector } from 'react-redux'
import { onLogout } from '../store/auth/authSlice'

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth)

  const dispatch = useDispatch()

  const loginWithGoogle = async () => {
    // dispatch(onChecking())
    // dispatch(onLogin())
  }

  const checkAuthToken = async () => {
    // const token = localStorage.getItem('token')
    // if (!token) return dispatch(onLogout())
  }

  const startLogout = () => {
    localStorage.clear()
    dispatch(onLogout())
  }

  return {
    // Propiedades
    status,
    user,
    errorMessage,
    // Metodos
    loginWithGoogle,
    checkAuthToken,
    startLogout,
  }
}
