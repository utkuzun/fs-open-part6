/* eslint-disable indent */
import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const anecdoteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    update(state, action) {
      const { id, changed } = action.payload
      const newState = state.map((item) => (item.id === id ? changed : item))
      return newState
    },

    create(state, action) {
      const newItem = action.payload

      return [...state, newItem]
    },

    setAnecds(state, action) {
      return action.payload
    },
  },
})

export const { update, create, setAnecds } = anecdoteSlice.actions
export default anecdoteSlice.reducer
