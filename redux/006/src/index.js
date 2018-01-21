import React from 'react'
import ReactDOM from 'react-dom'
import App from 'app.js'
import store from 'store'

window.onload = () => {
  ReactDOM.render(<App store={store}/>, document.getElementById('app'))
}
