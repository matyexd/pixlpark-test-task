import axios from 'axios'


export const BASE_API_URL = 'https://api.allorigins.win/get?url=http://api.pixlpark.com'

const api = axios.create({
	withCredentials: true,
	baseURL: BASE_API_URL
})


api.interceptors.request.use(async config => {
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

export default api
