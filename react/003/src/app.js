import React from 'react'
import ClockSphere from 'components/clock-sphere'

export default class App extends React.Component {
  render() {
    return (
      <div className="clock">
        <ClockSphere/>
      </div>
    )
  }
}
