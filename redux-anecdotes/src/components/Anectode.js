import React from 'react'
import { useDispatch } from 'react-redux'

import anecdotesService from '../services/anecdotes'
import { update } from '../reducers/anecdoteReducer'
import { setNotif, resetNotif } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote }) => {
  const { content, votes, id } = anecdote

  const dispatch = useDispatch()

  const voteAnecdote = async () => {
    try {
      const anecChanged = await anecdotesService.update(id, {
        ...anecdote,
        votes: votes + 1,
      })
      dispatch(update({ id, changed: anecChanged }))
      const message = `You voted ${content}`
      dispatch(setNotif({ notification: message, type: 'success' }))
      setTimeout(() => {
        dispatch(resetNotif())
      }, 5000)
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
