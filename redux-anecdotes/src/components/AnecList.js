import React from 'react'
import Anecdote from './Anectode'
import { useSelector } from 'react-redux'

const AnecList = () => {
  const anecdotes = useSelector((state) =>
    state.sort((a, b) => (a.votes < b.votes ? 1 : -1))
  )

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <Anecdote key={anecdote.id} anecdote={anecdote} />
      ))}
    </div>
  )
}

export default AnecList
