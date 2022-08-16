import { configureStore } from '@reduxjs/toolkit'
import noteReducer from './reducers/anecdoteReducer'
import notifReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'

const store = configureStore({
  reducer: {
    notes: noteReducer,
    notification: notifReducer,
    filter: filterReducer,
  },
})

export default store
