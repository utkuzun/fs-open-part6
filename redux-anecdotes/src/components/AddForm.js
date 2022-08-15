import React from 'react'
import { useState } from 'react'

const AddForm = () => {
  const [form, setForm] = useState('')

  const handleChange = (e) => {
    const { value } = e.target
    setForm(value)
  }

  return (
    <form>
      <h2>create new</h2>

      <div>
        <input type='text' value={form} onChange={handleChange} />
      </div>
    </form>
  )
}

export default AddForm
