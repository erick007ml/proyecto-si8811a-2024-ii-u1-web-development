import { createSlice } from '@reduxjs/toolkit'

export const eventSlice = createSlice({
  name: 'event',
  initialState: {
    isLoadingEvents: true,
    events: [] as unknown[],
    activeEvent: null as unknown,
  },
  reducers: {
    onSetActiveEvent: (state, { payload }: { payload: unknown }) => {
      state.activeEvent = payload
    },
    onAddNewEvent: (state, { payload }: { payload: unknown }) => {
      state.events.push(payload)
      state.activeEvent = null
    },

    onLogoutEvent: (state) => {
      state.isLoadingEvents = true
      state.events = []
      state.activeEvent = null
    },
  },
})

export const {
  onAddNewEvent,

  onLogoutEvent,
  onSetActiveEvent,
} = eventSlice.actions

export default eventSlice.reducer
