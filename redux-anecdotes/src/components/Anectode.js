import React from 'react'
import { useDispatch } from 'react-redux'

import { updateAnec } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote }) => {
  const { content, votes, id } = anecdote

  const dispatch = useDispatch()

  const voteAnecdote = async () => {
    try {
      const anecUpdate = {
        ...anecdote,
        votes: votes + 1,
      }
      dispatch(updateAnec({ id, anecUpdate }))
      const message = `You voted ${content}`
      dispatch(showNotification({ notification: message, type: 'success' }, 5))
    } catch (error) {
      console.log(error)
    }
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
