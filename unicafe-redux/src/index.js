import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const changeRate = (arg) => {
    store.dispatch({
      type: arg,
    })
  }

  return (
    <div>
      <button onClick={() => changeRate('GOOD')}>good</button>
      <button onClick={() => changeRate('OK')}>ok</button>
      <button onClick={() => changeRate('BAD')}>bad</button>
      <button onClick={() => changeRate('ZERO')}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
