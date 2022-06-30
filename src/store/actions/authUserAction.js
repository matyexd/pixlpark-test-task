import {
	AUTH_GET_ACCESS_TOKEN,
	AUTH_GET_ACCESS_TOKEN_FAIL,
	AUTH_GET_ACCESS_TOKEN_SUCCESS,
	UNAUTHORIZE_REQUEST
} from '../types/AuthTypes'

// handle getting access token and unauthorized

export const getAccessTokenAction = (requestToken, username, password) => ({
	type: AUTH_GET_ACCESS_TOKEN,
	payload: { requestToken, username, password }
})

export const getAccessTokenSuccessAction = () => ({
	type: AUTH_GET_ACCESS_TOKEN_SUCCESS
})

export const getAccessTokenFailAction = (payload) => ({
	type: AUTH_GET_ACCESS_TOKEN_FAIL,
	payload: payload
})

export const authUnauthorizedAction = () => ({
	type: UNAUTHORIZE_REQUEST
})





