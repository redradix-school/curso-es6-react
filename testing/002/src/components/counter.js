import React from 'react'
import Button from 'components/button'

export default class Counter extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
    this.increment = this.increment.bind(this)
  }
  increment() {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return (
      <div className="counter">
        <h1>{this.state.count}</h1>
        <Button label="+1" action={this.increment}/>
      </div>
    )
  }
}
