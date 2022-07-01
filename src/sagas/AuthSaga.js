import { call, put, takeEvery } from 'redux-saga/effects'
import { AUTH_CHECK_AUTH, AUTH_GET_ACCESS_TOKEN, UNAUTHORIZE_REQUEST } from '../store/types/AuthTypes'
import { authService, checkAuthService, unauthorizedService } from '../service/api/AuthService'
import {
	checkAuthFailAction,
	checkAuthSuccessAction,
	getAccessTokenFailAction,
	getAccessTokenSuccessAction
} from '../store/actions/authUserAction'


export function* AuthGetAccessTokenWorker({ payload }) {
	try {
		const data = yield call(authService, payload)
		if (data.data.Success) {
			yield localStorage.setItem('accessToken', data.data.AccessToken)
			yield localStorage.setItem('refreshToken', data.data.RefreshToken)
			yield put(getAccessTokenSuccessAction(data.data))
		} else {
			yield put(getAccessTokenFailAction('Неверные данные'))
		}
	} catch (e) {

		yield put(getAccessTokenFailAction('Непредвиденная ошибка'))
	}
}

export function* AuthUnauthorizedWorker(args) {
	try {
		const data = yield call(unauthorizedService)
		if (data.data.Success) {
			yield localStorage.removeItem('accessToken', data.data.AccessToken)
			yield localStorage.removeItem('refreshToken', data.data.RefreshToken)
		} else {

		}
	} catch (e) {

	}
}

export function* CheckAuthWorker() {
	try {
		const data = yield call(checkAuthService)
		if (data.data.Success) {
			yield localStorage.setItem('accessToken', data.data.AccessToken)
			yield localStorage.setItem('refreshToken', data.data.RefreshToken)
			yield put(checkAuthSuccessAction())
		} else {
			yield localStorage.removeItem('accessToken')
			yield localStorage.removeItem('refreshToken')
			yield put(checkAuthFailAction())
		}
	} catch (e) {

		yield localStorage.removeItem('accessToken')
		yield localStorage.removeItem('refreshToken')
		yield put(checkAuthFailAction())
	}
}

export function* AuthWatcher() {
	yield takeEvery(AUTH_GET_ACCESS_TOKEN, AuthGetAccessTokenWorker)
	yield takeEvery(UNAUTHORIZE_REQUEST, AuthUnauthorizedWorker)
	yield takeEvery(AUTH_CHECK_AUTH, CheckAuthWorker)
}
