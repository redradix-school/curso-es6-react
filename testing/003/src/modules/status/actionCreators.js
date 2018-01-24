import { START_TIMER, STOP_TIMER, PAUSE_TIMER, RESUME_TIMER } from './actionTypes'

export const startTimer = () => ({
  type: START_TIMER
})

export const stopTimer = () => ({
  type: STOP_TIMER
})

export const pauseTimer = () => ({
  type: PAUSE_TIMER
})

export const resumeTimer = () => ({
  type: RESUME_TIMER
})
