import React from 'react'
import { Provider } from 'react-redux'
import Counter from 'components/counter'

export default class App extends React.Component {
  render() {
    return <Provider store={this.props.store}>
      <Counter/>
    </Provider>
  }
}
