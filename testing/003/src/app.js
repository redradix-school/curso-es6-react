import React from 'react'
import { connect } from 'react-redux'
import Stopwatch from 'components/stopwatch'
import LapList from 'components/lap-list'
import ResetLapsButton from 'components/reset-laps-button'

import { startTimer, stopTimer, pauseTimer, resumeTimer } from 'modules/timer/actionCreators'
import { updateLaps } from 'modules/laps/actionCreators'

class App extends React.Component {
  render() {
    const { timer, laps, status } = this.props
    return (
      <div className="main-content wrapper">
        <div className="timer">
          <Stopwatch timer={timer} status={status} laps={laps}
                     updateLaps={this.props.updateLaps}
                     pauseTimer={this.props.pauseTimer}
                     resumeTimer={this.props.resumeTimer}
                     stopTimer={this.props.stopTimer}
                     startTimer={this.props.startTimer} />
          <LapList laps={laps} updateLaps={this.props.updateLaps} />
          <ResetLapsButton onClick={() => this.props.updateLaps([])} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)  => ({
  timer: state.timer.time,
  status: state.status,
  laps: state.laps
})

const mapDispatchToProps = ({
  startTimer,
  stopTimer,
  pauseTimer,
  resumeTimer,
  updateLaps
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
