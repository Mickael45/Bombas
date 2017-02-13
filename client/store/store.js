import { createStore, applyMiddleware, compose } from 'redux'
import promise from 'redux-promise'
import rootReducer from '../reducers'
import { loadState, saveState } from './localStorage'

const persistedState = loadState()

const finalCreateStore = compose(
  applyMiddleware(promise),
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
)(createStore)

const store = finalCreateStore(rootReducer, persistedState)

store.subscribe(() => {
  saveState({
    authReducer: store.getState().authReducer
  })
})

module.exports = store
