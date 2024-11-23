import { jwtDecode } from 'jwt-decode'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Callback = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const token = urlParams.get('token')

    if (token) {
      const decoded = jwtDecode(token)

      localStorage.setItem('authToken', token)
      localStorage.setItem('user', JSON.stringify(decoded))

      navigate('/')
    } else {
      navigate('/login')
    }
  }, [navigate])

  return (
    <div>
      <h2>Loading...</h2>
    </div>
  )
}

export default Callback
