import React from 'react'

export default class LapList extends React.Component {
  deleteLap(index) {
    const { laps, updateLaps } = this.props
    laps.splice(index, 1)
    updateLaps(laps)
  }
  renderLapItem(lap, index) {
    return (
      <li key={index}>
        <span>{lap}</span>
        <button onClick={() => this.deleteLap(index)} className="button-icon">
          <span className="icon icon-x-circle"></span>
        </button>
      </li>
    )
  }
  render() {
    const { laps } = this.props
    const items = laps.map((lap, i) => this.renderLapItem(lap, i))
    return (
      <div className="timer-content">
        <div className="timer-list">
          <ul>
            {items}
          </ul>
        </div>
      </div>
    )
  }
}
