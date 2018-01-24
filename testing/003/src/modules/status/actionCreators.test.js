import { START_TIMER, STOP_TIMER, PAUSE_TIMER, RESUME_TIMER } from './actionTypes'
import { startTimer, stopTimer, pauseTimer, resumeTimer } from './actionCreators'

describe('modulo status actionCreators', () => {
  describe('startTimer', () => {
    test('debería construir la acción correctamente', () => {
      const action = startTimer()
      expect(action).toEqual({ type: START_TIMER })
    })
  })

  describe('stopTimer', () => {
    test('debería construir la acción correctamente', () => {
      const action = startTimer()
      expect(action).toEqual({ type: START_TIMER })
    })
  })

  describe('stopTimer', () => {
    test('debería construir la acción correctamente', () => {
      const action = stopTimer()
      expect(action).toEqual({ type: STOP_TIMER })
    })
  })

  describe('pauseTimer', () => {
    test('debería construir la acción correctamente', () => {
      const action = pauseTimer()
      expect(action).toEqual({ type: PAUSE_TIMER })
    })
  })

  describe('resumeTimer', () => {
    test('debería construir la acción correctamente', () => {
      const action = resumeTimer()
      expect(action).toEqual({ type: RESUME_TIMER })
    })
  })
})
