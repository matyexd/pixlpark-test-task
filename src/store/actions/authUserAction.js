import {
	AUTH_CHECK_AUTH,
	AUTH_CHECK_AUTH_FAIL,
	AUTH_CHECK_AUTH_SUCCESS,
	AUTH_GET_ACCESS_TOKEN,
	AUTH_GET_ACCESS_TOKEN_FAIL,
	AUTH_GET_ACCESS_TOKEN_SUCCESS,
	UNAUTHORIZE_REQUEST
} from '../types/AuthTypes'

export const getAccessTokenAction = (requestToken, username, password) => ({
	type: AUTH_GET_ACCESS_TOKEN,
	payload: { requestToken, username, password }
})

export const getAccessTokenSuccessAction = (payload) => ({
	type: AUTH_GET_ACCESS_TOKEN_SUCCESS,
	payload: payload
})

export const getAccessTokenFailAction = (payload) => ({
	type: AUTH_GET_ACCESS_TOKEN_FAIL,
	payload: payload
})

export const checkAuthAction = () => ({
	type: AUTH_CHECK_AUTH
})

export const checkAuthSuccessAction = () => ({
	type: AUTH_CHECK_AUTH_SUCCESS
})

export const checkAuthFailAction = () => ({
	type: AUTH_CHECK_AUTH_FAIL
})

export const authUnauthorizedAction = () => ({
	type: UNAUTHORIZE_REQUEST
})





