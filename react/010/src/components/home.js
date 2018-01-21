import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
  componentDidMount() {
    const { push } = this.props.history
    setTimeout(() => push('/timer/10'), 1000)
  }
  render() {
    return <div>
      <h1>Home</h1>
      <Link to='/timer/190'>Go to timer</Link>
      </div>
  }
}
