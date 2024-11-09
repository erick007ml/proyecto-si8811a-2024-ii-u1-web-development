import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import AppRouter from './router/AppRouter'
import { Toaster } from '@/components/ui/toaster'

export const JuegosFloralesApp = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter
          future={{
            v7_relativeSplatPath: true,
          }}
        >
          <AppRouter />
        </BrowserRouter>
      </Provider>
      <Toaster />
    </>
  )
}