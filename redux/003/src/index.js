import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'

const Counter = (props) => <h1> {props.value} </h1>

function counter(state = 0, action) {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1
    default:
      return state
  }
}

const store = createStore(combineReducers({ counter }))

store.subscribe(() => {
  const state = store.getState()
  ReactDOM.render(<Counter value={state.counter} />, document.getElementById('app'))
})

// action
window.onload = () => {
  store.dispatch({ type: 'INCREMENT' })
  store.dispatch({ type: 'INCREMENT' })
}
