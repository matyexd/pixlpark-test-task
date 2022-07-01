import { GET_ORDERS, GET_ORDERS_FAIL, GET_ORDERS_SUCCESS } from '../types/OrdersTypes'

export const getOrdersAction = (take, skip, status) => ({
	type: GET_ORDERS,
	payload: { take, skip, status }
})

export const getOrdersSuccessAction = (payload) => ({
	type: GET_ORDERS_SUCCESS,
	payload: payload
})

export const getOrdersFailAction = (payload) => ({
	type: GET_ORDERS_FAIL,
	payload: payload
})