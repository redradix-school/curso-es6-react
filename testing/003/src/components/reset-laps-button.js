import React from 'react'

export default class ResetLapsButton extends React.Component {
  render() {
    return (
      <div className="timer-actions">
        <button className="button-error" onClick={this.props.onClick}>
          <span className="icon icon-refresh-ccw"></span>
          <span className="text">Reset</span>
        </button>
      </div>
    )
  }
}
