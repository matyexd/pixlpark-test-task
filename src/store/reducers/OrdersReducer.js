import { GET_ORDERS, GET_ORDERS_FAIL, GET_ORDERS_SUCCESS } from '../types/OrdersTypes'

const initialState = {
	orders: [],
	isLoading: true,
	error: ''
}

export const OrdersReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ORDERS:
			return {
				...state,
				isLoading: true
			}

		case GET_ORDERS_SUCCESS:
			return {
				...state,
				orders: action.payload,
				isLoading: false
			}

		case GET_ORDERS_FAIL:
			return {
				...state,
				error: action.payload,
				isLoading: false
			}

		default:
			return state
	}
}
