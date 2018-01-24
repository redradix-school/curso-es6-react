import { START_TIMER, STOP_TIMER, PAUSE_TIMER, RESUME_TIMER } from './actionTypes'
import statusReducer from './index'

describe('modulo status reducer', () => {
  test('deberia cambiar a estado "running" con START_TIMER ', () => {
    const action = { type: START_TIMER }
    const state = 'stopped'
    expect(statusReducer(state, action)).toBe('running')
  })

  test('deberia cambiar a estado "stopped" con STOP_TIMER ', () => {
    const action = { type: STOP_TIMER }
    const state = 'running'
    expect(statusReducer(state, action)).toBe('stopped')
  })

  test('deberia cambiar a estado "paused" con PAUSE_TIMER ', () => {
    const action = { type: PAUSE_TIMER }
    const state = 'running'
    expect(statusReducer(state, action)).toBe('paused')
  })

  test('deberia cambiar a estado "running" con RESUME_TIMER ', () => {
    const action = { type: RESUME_TIMER }
    const state = 'paused'
    expect(statusReducer(state, action)).toBe('running')
  })
  
})
