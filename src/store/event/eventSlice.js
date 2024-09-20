import { createSlice } from '@reduxjs/toolkit'

export const eventSlice = createSlice({
  name: 'event',
  initialState: {
    isLoadingEvents: true,
    events: [],
    activeEvent: null,
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload)
      state.activeEvent = null
    },
    onUpdateEvent: (state, { payload }) => {
      state.events = state.events.map((event) => {
        if (event.id === payload.id) {
          return payload
        }
        return event
      })
    },
    onDeleteEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter(
          (event) => event.id !== state.activeEvent.id
        )
        state.activeEvent = null
      }
    },
    onLoadEvents: (state, { payload = [] }) => {
      state.isLoadingEvents = false
      payload.forEach((event) => {
        const exist = state.events.some((dbEvent) => dbEvent.id === event.id)
        if (!exist) {
          state.events.push(event)
        }
      })
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
  onDeleteEvent,
  onLoadEvents,
  onLogoutEvent,
  onSetActiveEvent,
  onUpdateEvent,
} = eventSlice.actions

export default eventSlice.reducer
