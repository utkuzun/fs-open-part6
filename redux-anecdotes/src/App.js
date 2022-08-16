import AddForm from './components/AddForm'
import AnecList from './components/AnecList'
import Notification from './components/Notification'
import Filter from './components/Filter'

const App = () => {
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
