import { createStore, compose } from 'redux'
import rootReducer from '../reducers'
import { loadState, saveState } from './localStorage'

const persistedState = loadState()

const store = createStore(rootReducer, persistedState, compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
))
store.subscribe(() => {
  saveState(store.getState())
})

module.exports = store
