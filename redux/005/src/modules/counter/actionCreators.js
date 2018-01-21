import { INCREMENT, DECREMENT } from './actionTypes'

export const increment = (n = 1) => ({
  type: INCREMENT,
  payload: n
})

export const decrement = (n = 1) => ({
  type: DECREMENT,
  payload: n
})
