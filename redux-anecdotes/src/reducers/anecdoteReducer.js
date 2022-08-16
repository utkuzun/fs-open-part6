/* eslint-disable indent */
import { createSlice } from '@reduxjs/toolkit'
import anecdotesService from '../services/anecdotes'

const initialState = []

const anecdoteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    update(state, action) {
      const { id, updated } = action.payload
      const newState = state.map((item) => (item.id === id ? updated : item))
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

export const initialFetchAnecdotes = () => {
  return async (dispatch) => {
    const anecs = await anecdotesService.getAll()
    dispatch(setAnecds(anecs))
  }
}

export const addAnec = (anectode) => {
  return async (dispatch) => {
    const anecdoteAdded = await anecdotesService.create(anectode)
    dispatch(create(anecdoteAdded))
  }
}

export const updateAnec = ({ id, anecUpdate }) => {
  return async (dispatch) => {
    const updated = await anecdotesService.update(id, anecUpdate)
    dispatch(update({ id, updated }))
  }
}

export const { update, create, setAnecds } = anecdoteSlice.actions
export default anecdoteSlice.reducer
