import { createStore, combineReducers, applyMiddleware } from 'redux'
import weather from 'modules/weather'
import thunk from 'redux-thunk'

export default createStore(
  combineReducers({ weather }),
  applyMiddleware(thunk)
)
