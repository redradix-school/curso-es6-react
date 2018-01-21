import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'


function counter(state = 0, action) {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1
    default:
      return state
  }
}

const store = createStore(combineReducers({ counter }))


class Counter extends React.Component {
  render() {
    return <div>
      <h1>{this.props.value}</h1>
      <button
        onClick={() => this.props.dispatch({ type: 'INCREMENT' })}>
        Increment
      </button>
    </div>
  }
}

const mapStateToProps = state => ({ value: state.counter })

const ConnectedCounter = connect(mapStateToProps)(Counter)

window.onload = () => {
  ReactDOM.render(
    <Provider store={store}><ConnectedCounter/></Provider>,
    document.getElementById('app')
  )
}
