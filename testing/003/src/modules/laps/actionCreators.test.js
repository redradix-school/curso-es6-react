import { updateLaps } from './actionCreators'
import {UPDATE_LAPS } from './actionTypes'

describe('modulo laps actionCreators', () => {
  describe('updateLaps', () => {
    test('debería construir la acción con payload', () => {
      const laps = [1, 2, 3]
      const action = updateLaps(laps)
      expect(action).toEqual({ type: UPDATE_LAPS, payload: laps })
    })
  })
})
