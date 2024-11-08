import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { eventSlice } from './event/eventSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    event: eventSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
