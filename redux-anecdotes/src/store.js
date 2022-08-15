import { configureStore } from '@reduxjs/toolkit'
import noteReducer from './reducers/anecdoteReducer'

const store = configureStore({
  reducer: {
    notes: noteReducer,
  },
})

export default store
