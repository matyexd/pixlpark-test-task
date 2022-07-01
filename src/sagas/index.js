import { all } from 'redux-saga/effects'
import { AuthWatcher } from './AuthSaga'
import { OrdersWatcher } from './OrdersSaga'

export function* rootWatcher() {
	yield all([AuthWatcher(), OrdersWatcher()])
}