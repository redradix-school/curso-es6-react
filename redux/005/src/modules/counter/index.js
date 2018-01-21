import { INCREMENT, DECREMENT } from './actionTypes'

export default (state = 0, action) => {
  const amount = action.payload
  switch(action.type) {
    case INCREMENT:
      return state + amount
    case DECREMENT:
      return state - amount
    default:
      return state
  }
}
