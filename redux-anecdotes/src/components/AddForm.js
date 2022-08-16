import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { create } from '../reducers/anecdoteReducer'
import { setNotif, resetNotif } from '../reducers/notificationReducer'

const AddForm = () => {
  const [form, setForm] = useState('')

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { value } = e.target
    setForm(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(create(form))

    const message = 'Anecdote is added..'
    dispatch(setNotif({ notification: message, type: 'success' }))
    setTimeout(() => {
      dispatch(resetNotif())
    }, 5000)

    setForm('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>create new</h2>

      <div>
        <input type='text' value={form} onChange={handleChange} />
        <button type='submit'>Add new</button>
      </div>
    </form>
  )
}

export default AddForm
