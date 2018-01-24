import { UPDATE_LAPS } from './actionTypes'

export default (state = [], action) => {
  switch(action.type) {
    case UPDATE_LAPS:
      return action.payload
    default:
      return state
  }
}
