import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { create } from '../reducers/anecdoteReducer'

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
