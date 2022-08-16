import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { initialFetchAnecdotes } from './reducers/anecdoteReducer'

import AddForm from './components/AddForm'
import AnecList from './components/AnecList'
import Notification from './components/Notification'
import Filter from './components/Filter'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initialFetchAnecdotes())
  }, [])

  return (
    <div>
      <Filter />
      <Notification />
      <AnecList />
      <AddForm />
    </div>
  )
}

export default App
