import React from 'react'
import Anecdote from './Anectode'
import { useSelector } from 'react-redux'

const AnecList = () => {
  const anecdotes = useSelector((state) => state.notes)
  const filter = useSelector((state) => state.filter)

  const filtered = anecdotes
    .filter((item) => item.content.toLowerCase().includes(filter))
    .sort((a, b) => (b.votes > a.votes ? 1 : -1))
  return (
    <div>
      <h2>Anecdotes</h2>
      {filtered.map((anecdote) => (
        <Anecdote key={anecdote.id} anecdote={anecdote} />
      ))}
    </div>
  )
}

export default AnecList
