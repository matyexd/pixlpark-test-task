import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from '../../sagas'
import { AuthUserReducer } from './AuthUserReducer'
import { OrdersReducer } from './OrdersReducer'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({ Auth: AuthUserReducer, Orders: OrdersReducer })

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)