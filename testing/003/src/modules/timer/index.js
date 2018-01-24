import { START_TIMER , STOP_TIMER , PAUSE_TIMER , RESUME_TIMER , TIMER_TICK } from './actionTypes'

export default (state = { time: 0, id: undefined }, action) => {
  switch(action.type) {
    case 'START_TIMER':
      return { time: 0, id: action.payload }
    case 'STOP_TIMER':
      return { time: 0, id: undefined }
    case 'PAUSE_TIMER':
      return { time: state.time, id: undefined }
    case 'RESUME_TIMER':
      return { time: state.time, id: action.payload }
    case 'TIMER_TICK':
      return {
        time: state.time + 1,
        id: state.id
      }
    default:
      return state
  }
}
