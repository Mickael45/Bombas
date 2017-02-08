import authReducer from './users/authReducer'
import infoReducer from './infoReducer'
import xmlReducer from './xmlReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  authReducer,
  infoReducer,
  xmlReducer
})

module.exports = rootReducer
