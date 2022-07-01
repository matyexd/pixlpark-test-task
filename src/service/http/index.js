import axios from 'axios'


export const API_URL = process.env.REACT_APP_PROXY_SERVER_URL + process.env.REACT_APP_BASE_API_URL

const api_auth = axios.create({
	baseURL: API_URL
})

const api = axios.create({
	baseURL: API_URL
})


api_auth.interceptors.request.use(async config => {
	return config
})

api.interceptors.request.use(async config => {
	config.params = {
		oauth_token: localStorage.getItem('accessToken')
	}
	return config
})

// $api.interceptors.response.use(
// 	config => {
// 		return config
// 	},
// 	async error => {
// 		const originalRequest = error.config
// 		if (
// 			error.response.status === 401 &&
// 			error.config &&
// 			!error.config._isRetry
// 		) {
// 			originalRequest._isRetry = true
// 			try {
// 				console.log('Refresh')
// 				const response = await $refresh_api.post('/refresh')
// 				await storeUserSession('token', response.data.data.access_token)
// 				return $api.request(originalRequest)
// 			} catch (e) {
// 				console.log(e)
// 				console.log('НЕ АВТОРИЗОВАН')
// 			}
// 		}
// 		throw error
// 	}
// )

export default api_auth
