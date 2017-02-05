import authReducer from './users/authReducer'
import infoReducer from './infoReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  authReducer,
  infoReducer
})

module.exports = rootReducer
