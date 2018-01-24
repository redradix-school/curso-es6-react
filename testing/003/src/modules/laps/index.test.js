import { UPDATE_LAPS } from './actionTypes'
import lapReducer from './index'

describe('modulo laps reducer', () => {
  test('deberia sustituir su estado por la lista que reciba en payload', () => {
    const state = [1, 2]
    const payload = [1, 2, 3]
    const action = { type: UPDATE_LAPS, payload: payload }
    const nextState = lapReducer(state, action)
    expect(nextState).toBe(payload)
  })
})

