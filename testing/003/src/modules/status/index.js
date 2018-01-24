import { START_TIMER, STOP_TIMER, PAUSE_TIMER, RESUME_TIMER } from './actionTypes'

export default (state = 'stopped', action) => {
  switch(action.type) {
    case START_TIMER:
      return 'running'
    case STOP_TIMER:
      return 'stopped'
    case PAUSE_TIMER:
      return 'paused'
    case RESUME_TIMER:
      return 'running'
    default:
      return state
  }
}
