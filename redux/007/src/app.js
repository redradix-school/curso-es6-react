import React from 'react'
import { Provider } from 'react-redux'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
      </Provider>
    )
  }
}
