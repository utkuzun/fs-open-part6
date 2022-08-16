import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import anecdotesService from './services/anecdotes'
import { setAnecds } from './reducers/anecdoteReducer'

import AddForm from './components/AddForm'
import AnecList from './components/AnecList'
import Notification from './components/Notification'
import Filter from './components/Filter'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      const data = await anecdotesService.getAll()
      dispatch(setAnecds(data))
    }

    fetchData()
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
