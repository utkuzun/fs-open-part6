import { useSelector } from 'react-redux'
import AddForm from './components/AddForm'
import Anecdote from './components/Anectode'

const App = () => {
  const anecdotes = useSelector((state) => state)

  // const vote = (id) => {
  //   console.log('vote', id)
  // }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <Anecdote key={anecdote.id} anecdote={anecdote} />
      ))}
      <AddForm />
    </div>
  )
}

export default App
