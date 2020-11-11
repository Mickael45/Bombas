import authReducer from './auth'
import supplyInfoReducer from './supplyInfo'
import xmlReducer from './xml'
import vehicleReducer from './vehicle'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  authReducer,
  supplyInfoReducer,
  vehicleReducer,
  xmlReducer
})

module.exports = rootReducer
