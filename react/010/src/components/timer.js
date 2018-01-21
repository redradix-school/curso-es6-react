import React from 'react'
import { Link } from 'react-router-dom'

export default class Timer extends React.Component {
  render() {
    return <div>
      <h1>Timer: {this.props.match.params.time}</h1>
      <Link to="/">Go to Home</Link>
    </div>
  }
}
