import {
	AUTH_CHECK_AUTH,
	AUTH_CHECK_AUTH_FAIL,
	AUTH_CHECK_AUTH_SUCCESS,
	AUTH_GET_ACCESS_TOKEN,
	AUTH_GET_ACCESS_TOKEN_FAIL,
	AUTH_GET_ACCESS_TOKEN_SUCCESS,
	UNAUTHORIZE_REQUEST
} from '../types/AuthTypes'

const initialState = {
	isAuth: false,
	isLoading: false,
	error: ''

}

export const AuthUserReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH_GET_ACCESS_TOKEN:

			return {
				...state,
				isLoading: true,
				error: ''
			}

		case AUTH_GET_ACCESS_TOKEN_SUCCESS:

			return {
				...state,
				isAuth: true,
				isLoading: false,
				error: ''
			}
		case AUTH_GET_ACCESS_TOKEN_FAIL:

			return {
				isAuth: false,
				isLoading: false,
				error: action.payload
			}

		case AUTH_CHECK_AUTH:

			return {
				...state,
				isLoading: true
			}

		case AUTH_CHECK_AUTH_SUCCESS:

			return {
				...state,
				error: '',
				isLoading: false,
				isAuth: true
			}

		case AUTH_CHECK_AUTH_FAIL:

			return {
				...state,
				isLoading: false,
				isAuth: false
				// error: 'Не авторизован'
			}

		case UNAUTHORIZE_REQUEST:
			return {
				isAuth: false,
				isLoading: false,
				error: ''
			}

		default:
			return state
	}
}
