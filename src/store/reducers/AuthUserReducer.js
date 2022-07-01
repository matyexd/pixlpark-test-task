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
			console.log('Авторизация...')
			return {
				...state,
				isLoading: true
			}

		case AUTH_GET_ACCESS_TOKEN_SUCCESS:
			console.log('Успех авторизации')
			return {
				...state,
				isAuth: true,
				isLoading: false
			}
		case AUTH_GET_ACCESS_TOKEN_FAIL:
			console.log('Ошибка авторизации')
			return {
				isAuth: false,
				isLoading: false,
				error: action.payload
			}

		case AUTH_CHECK_AUTH:
			console.log('Проверка на авторизованность')
			return {
				...state,
				isLoading: true
			}

		case AUTH_CHECK_AUTH_SUCCESS:
			console.log('Успешная проверка')
			return {
				...state,
				isLoading: false,
				isAuth: true
			}

		case AUTH_CHECK_AUTH_FAIL:
			console.log('Не авторизован', action.payload)
			return {
				...state,
				isLoading: false,
				isAuth: false,
				error: 'Не авторизован'
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
