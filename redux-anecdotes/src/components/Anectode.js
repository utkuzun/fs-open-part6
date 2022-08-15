import React from 'react'
import { useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote }) => {
  const { content, votes, id } = anecdote

  const dispatch = useDispatch()

  const voteAnecdote = () => {
    dispatch(vote(id))
  }

  return (
    <div>
      <div>{content}</div>
      <div>
        {votes}
        <button onClick={voteAnecdote}>vote</button>
      </div>
    </div>
  )
}

export default Anecdote
