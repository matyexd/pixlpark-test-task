import api from '../http'

export const getAccessTokenApi = async ({ requestToken, username, password }) => {
	const result = await api.get(
		'/oauth/accesstoken',
		{
			params: {
				oauth_token: requestToken,
				grant_type: 'api',
				username: username,
				password: password
			}
		})
}