import { createStore, combineReducers } from 'redux'
import counter from 'modules/counter'

export default createStore(combineReducers({ counter }))
