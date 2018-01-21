import React from 'react'
import ReactDOM from 'react-dom'

const MyComponent = (props) => {
  return <h1>Home</h1>
}

window.onload = () => {
  ReactDOM.render(<MyComponent/>, document.getElementById('app'))
}
