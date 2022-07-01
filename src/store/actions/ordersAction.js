import { GET_ORDERS } from '../types/OrdersTypes'

export const getOrdersAction = (take, skip, status) => ({
	type: GET_ORDERS,
	payload: { take, skip, status }
})

export const getOrdersSuccessAction = (payload) => ({
	type: GET_ORDERS,
	payload: payload
})

export const getOrdersFailAction = (payload) => ({
	type: GET_ORDERS,
	payload: payload
})