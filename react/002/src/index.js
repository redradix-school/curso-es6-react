import React from 'react'
import ReactDOM from 'react-dom'

class HolaCosa extends React.Component {
  render() {
    return (<h1> Hola, {this.props.cosa}!</h1>)
  }
}

class App extends React.Component {
  render() {
    return <HolaCosa cosa="Mundo" />
  }
}

window.onload = () => ReactDOM.render(
  React.createElement(App),
  document.getElementById('app')
)
