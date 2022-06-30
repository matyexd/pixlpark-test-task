import { all } from 'redux-saga/effects'
import { AuthWatcher } from './AuthSaga'

export function* rootWatcher() {
	yield all([AuthWatcher()])
}