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
