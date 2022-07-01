import api from '../http'

export const getOrdersService = async ({ take, skip, status }) => {
	return await api.get(
		'/orders',
		{
			params: {
				oauth_token: localStorage.getItem('accessToken'),
				take: take,
				skip: skip,
				status: status
			}
		}).then(response => response)
}