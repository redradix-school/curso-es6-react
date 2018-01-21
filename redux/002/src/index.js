import { createStore, combineReducers } from 'redux'

// reducer

function counter(state = 0, action) {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1
    default:
      return state
  }
}

function stack(state = [], action) {
  switch(action.type) {
    case 'PUSH':
      return [...state, action.payload]
    default:
      return state
  }
}

// store

const store = createStore(combineReducers({
  stack: stack,
  counter: counter
}), { stack: [0], counter: 10 })

store.subscribe(() => {
  const state = store.getState()
  console.log(`-> nuevo estado: ${JSON.stringify(state)}`)
})

// action

store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })

store.dispatch({ type: 'PUSH', payload: 'Hola' })
