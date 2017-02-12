import authReducer from './auth'
import infoReducer from './info'
import xmlReducer from './xml'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  authReducer,
  infoReducer,
  xmlReducer
})

module.exports = rootReducer
