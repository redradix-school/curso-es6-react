import { START_TIMER , STOP_TIMER , PAUSE_TIMER , RESUME_TIMER , TIMER_TICK } from './actionTypes'

export const startTimer = () => (dispatch) => {
  const id = setInterval(() => dispatch(timerTick()), 10)
  dispatch({ type: START_TIMER, payload: id })
}

export const stopTimer = () => (dispatch, getState) => {
  const state = getState().timer
  clearInterval(state.id)
  dispatch({ type: STOP_TIMER })
}

export const pauseTimer = () => (dispatch, getState) => {
  const state = getState().timer
  clearInterval(state.id)
  dispatch({ type: PAUSE_TIMER })
}

export const resumeTimer = () => (dispatch) => {
  const id = setInterval(() => dispatch(timerTick()), 10)
  dispatch({ type: RESUME_TIMER, payload: id })
}

export const timerTick = () => ({
  type: TIMER_TICK
})
