import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  notification: '',
  type: 'success',
}

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setNotif(state, action) {
      const { notification, type } = action.payload
      return { notification, type }
    },
    resetNotif() {
      return { notification: '', type: '' }
    },
  },
})

export const { setNotif, resetNotif } = notificationSlice.actions
export default notificationSlice.reducer
