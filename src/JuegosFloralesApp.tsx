import { Toaster } from '@/components/ui/toaster'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/AppRouter'
import { store } from './store/store'
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
