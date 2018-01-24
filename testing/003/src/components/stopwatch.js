import React from 'react'

export default class Stopwatch extends React.Component {
  constructor() {
    super()
    this.start = this.start.bind(this)
    this.pause = this.pause.bind(this)
    this.resume = this.resume.bind(this)
    this.stop = this.stop.bind(this)
    this.lap = this.lap.bind(this)
  }
  start() {
    const { startTimer } = this.props
    startTimer()
  }
  pause() {
    const { pauseTimer } = this.props
    pauseTimer()
  }
  resume() {
    const { resumeTimer } = this.props
    resumeTimer()
  }
  stop() {
    const { stopTimer } = this.props
    stopTimer()
  }
  lap() {
    const { updateLaps, laps, timer } = this.props
    updateLaps([...laps, timer])
  }
  render() {
    const { timer, status } = this.props
    return (
      <div className="timer-display">
        <div className="counter">{timer}</div>
        <div className="counter-actions">
          <button className="button-simple" onClick={this.start}
                  disabled={status !== 'stopped' && 'disabled'}>Start</button>
          { status === 'paused'
            ? <button className="button-simple" onClick={this.resume}>Resume</button>
            : <button className="button-simple" disabled={status !== 'running' && 'disabled'}
                        onClick={this.pause}>Pause</button>
          }
          <button className="button-simple" onClick={this.stop}
                  disabled={status === 'stopped' && 'disabled'}>Stop</button>
          <button className="button-simple" onClick={this.lap}
                  disabled={status !== 'running' && 'disabled'}>Lap</button>
        </div>
      </div>
    )
  }
}
