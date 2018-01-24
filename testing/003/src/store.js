import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import timer from 'modules/timer'
import status from 'modules/status'
import laps from 'modules/laps'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({timer, status, laps}),
  composeEnhancers(applyMiddleware(thunk))
)

export default store
