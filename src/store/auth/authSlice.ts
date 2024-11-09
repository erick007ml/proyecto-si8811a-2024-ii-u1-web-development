import { createSlice } from '@reduxjs/toolkit'

export type authStatusType = 'checking' | 'authenticated' | 'not-authenticated'

const initialState = {
  status: 'authenticated' as authStatusType,
  user: {},
  errorMessage: undefined,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    onChecking: (state) => {
      state.status = 'checking'
      state.user = {}
      state.errorMessage = undefined
    },
    onLogin: (state, { payload }) => {
      state.status = 'authenticated'
      state.user = payload
      state.errorMessage = undefined
    },
    onLogout: (state, { payload }) => {
      state.status = 'not-authenticated'
      state.user = {}
      state.errorMessage = payload
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined
    },
  },
})

export const { onChecking, onLogin, onLogout, clearErrorMessage } =
  authSlice.actions
