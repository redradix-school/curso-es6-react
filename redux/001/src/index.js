import { createStore } from 'redux'

// reducer

function counter(state, action) {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1
    default:
      return state
  }
}

// store

const store = createStore(counter, 0)

store.subscribe(() => {
  console.log(`-> nuevo estado: ${store.getState()}`)
})

// action

store.dispatch({ type: 'INCREMENT' })
