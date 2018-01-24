import { START_TIMER , STOP_TIMER , PAUSE_TIMER , RESUME_TIMER , TIMER_TICK } from './actionTypes'
import timerReducer from './index'

describe('modulo timer reducer', () => {
  describe('START_TIMER', () => {
    test('deberia poner el tiempo a 0 y guardar el timer id', () => {
      const state = { time: 1, id: undefined }
      const action = { type: START_TIMER, payload: 1 }
      expect(timerReducer(state, action)).toEqual({ time: 0, id: 1 })
    })
  })

  describe('STOP_TIMER', () => {
    test('deberia poner el tiempo a 0 y limpiar el timer id', () => {
      const state = { time: 1, id: 1 }
      const action = { type: STOP_TIMER }
      expect(timerReducer(state, action)).toEqual({ time: 0, id: undefined })
    })
  })

  describe('PAUSE_TIMER', () => {
    test('deberia mantener el valor del tiempo y limpiar el timer id', () => {
      const state = { time: 3, id: 1 }
      const action = { type: PAUSE_TIMER }
      expect(timerReducer(state, action)).toEqual({ time: 3, id: undefined })
    })
  })

  describe('RESUME_TIMER', () => {
    test('deberia mantener el valor del tiempo y guardar el timer id', () => {
      const state = { time: 3, id: undefined }
      const action = { type: RESUME_TIMER, payload: 1 }
      expect(timerReducer(state, action)).toEqual({ time: 3, id: 1 })
    })
  })

  describe('TIMER_TICK', () => {
    test('deberia incrementar el valor del tiempo', () => {
      const state = { time: 1, id: 1 }
      const action = { type: TIMER_TICK }
      expect(timerReducer(state, action)).toEqual({ time: 2, id: 1 })
    })
  })
})
