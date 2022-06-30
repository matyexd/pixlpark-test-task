import { takeEvery } from 'redux-saga/effects'
import { AUTH_GET_ACCESS_TOKEN, UNAUTHORIZE_REQUEST } from '../store/types/AuthTypes'


export function* AuthGetAccessTokenWorker(args) {
	try {

	} catch (e) {

	}
}

export function* AuthUnauthorizedWorker(args) {
	try {

	} catch (e) {

	}
}

export function* AuthWatcher() {
	yield takeEvery(AUTH_GET_ACCESS_TOKEN, AuthGetAccessTokenWorker)
	yield takeEvery(UNAUTHORIZE_REQUEST, AuthUnauthorizedWorker)
}
