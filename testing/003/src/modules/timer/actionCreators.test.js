import { START_TIMER , STOP_TIMER , PAUSE_TIMER , RESUME_TIMER , TIMER_TICK } from './actionTypes'
import { startTimer, stopTimer, pauseTimer, resumeTimer, timerTick} from './actionCreators'

jest.useFakeTimers()

describe('modulo timer actionCreators', () => {
  describe('startTimer', () => {
    test('debería poner un intervalo de actualización y despachar START_TIMER con el id del intervalo como payload', () => {
      jest.useFakeTimers()
      const fakeDispatch = jest.fn()
      startTimer()(fakeDispatch)
      // timer
      expect(setInterval).toHaveBeenCalledTimes(1)
      expect(setInterval).toHaveBeenCalledWith(
        expect.any(Function), 10
      )
      // dispatch
      const dispatchedAction = fakeDispatch.mock.calls[0][0]
      expect(dispatchedAction).toEqual({
        type: START_TIMER,
        payload: 1
      })
    })
  })

  describe('stopTimer', () => {
    test('deberia limpiar el interval y despachar la acción STOP_TIMER', () => {
      jest.useFakeTimers()
      const fakeDispatch = jest.fn()
      stopTimer()(fakeDispatch, () => ({ timer: { id: 1 } }))
      // timer
      expect(clearInterval).toHaveBeenCalledTimes(1)
      expect(clearInterval).toHaveBeenCalledWith(1)
      // dispatch
      const dispatchedAction = fakeDispatch.mock.calls[0][0]
      expect(dispatchedAction).toEqual({ type: STOP_TIMER })
    })
  })

  describe('pauseTimer', () => {
    test('deberia limpiar el interval y despachar la acción PAUSE_TIMER', () => {
      jest.useFakeTimers()
      const fakeDispatch = jest.fn()
      pauseTimer()(fakeDispatch, () => ({ timer: { id: 1 } }))
      // timer
      expect(clearInterval).toHaveBeenCalledTimes(1)
      expect(clearInterval).toHaveBeenCalledWith(1)
      // dispatch
      const dispatchedAction = fakeDispatch.mock.calls[0][0]
      expect(dispatchedAction).toEqual({ type: PAUSE_TIMER })
    })
  })

  describe('resumeTimer', () => {
    test('debería poner un intervalo de actualización y despachar RESUME_TIMER con el id del intervalo como payload', () => {
      jest.useFakeTimers()
      const fakeDispatch = jest.fn()
      resumeTimer()(fakeDispatch)
      // timer
      expect(setInterval).toHaveBeenCalledTimes(1)
      expect(setInterval).toHaveBeenCalledWith(
        expect.any(Function), 10
      )
      // dispatch
      const dispatchedAction = fakeDispatch.mock.calls[0][0]
      expect(dispatchedAction).toEqual({
        type: RESUME_TIMER,
        payload: 2
      })
    })
  })

  describe('timerTick', () => {
    test('debería construir la acción correctamente', () => {
      const action = timerTick()
      expect(action).toEqual({ type: TIMER_TICK })
    })
  })
})

