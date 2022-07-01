import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_ORDERS } from '../store/types/OrdersTypes'
import { getOrdersService } from '../service/api/OrdersService'
import { getOrdersFailAction, getOrdersSuccessAction } from '../store/actions/ordersAction'

export function* getOrdersWorker({ payload }) {
	try {
		const data = yield call(getOrdersService, payload)

		if (data.data.ResponseCode === 200) {
			yield put(getOrdersSuccessAction(data.data.Result))
		} else {

			yield put(getOrdersFailAction('Какая то ошибка'))
		}
	} catch (e) {

		yield put(getOrdersFailAction('Какая то ошибка'))
	}
}

export function* OrdersWatcher() {
	yield takeEvery(GET_ORDERS, getOrdersWorker)
}