import api from '../http'

export const authService = async ({ requestToken, username, password }) => {
	return await api.get(
		'/oauth/accesstoken',
		{
			params: {
				oauth_token: requestToken,
				grant_type: 'api',
				username: username,
				password: password
			}
		}).then(response => response)
}

export const checkAuthService = async () => {
	let refreshToken = localStorage.getItem('refreshToken')
	return await api.get(
		'/oauth/refreshtoken',
		{
			params: {
				refreshToken: refreshToken
			}
		}).then(response => response)
}

export const unauthorizedService = async () => {
	let accessToken = localStorage.getItem('accessToken')
	return await api.get(
		'/oauth/unauthorize',
		{
			params: { oauth_token: accessToken }
		}
	)
}