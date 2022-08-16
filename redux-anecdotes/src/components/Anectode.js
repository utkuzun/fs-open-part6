import React from 'react'
import { useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotif, resetNotif } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote }) => {
  const { content, votes, id } = anecdote

  const dispatch = useDispatch()

  const voteAnecdote = () => {
    dispatch(vote(id))
    const message = `You voted ${content}`
    dispatch(setNotif({ notification: message, type: 'success' }))
    setTimeout(() => {
      dispatch(resetNotif())
    }, 5000)
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
