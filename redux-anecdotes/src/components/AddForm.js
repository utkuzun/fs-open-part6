import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addAnec } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const AddForm = () => {
  const [form, setForm] = useState('')

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { value } = e.target
    setForm(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const anectodeForm = { content: form, votes: 0 }
    try {
      dispatch(addAnec(anectodeForm))
      const message = 'Anecdote is added..'
      dispatch(showNotification({ notification: message, type: 'success' }))

      setForm('')
    } catch (error) {
      console.log(error)
    }
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
