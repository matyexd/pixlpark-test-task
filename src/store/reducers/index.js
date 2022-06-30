import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from '../../sagas'
import { AuthUserReducer } from './AuthUserReducer'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({ Auth: AuthUserReducer })

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)