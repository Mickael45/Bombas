import authReducer from './users/authReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  authReducer
})

module.exports = rootReducer
