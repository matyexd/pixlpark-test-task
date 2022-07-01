import axios from 'axios'


export const API_URL = process.env.REACT_APP_PROXY_SERVER_URL + process.env.REACT_APP_BASE_API_URL

const api = axios.create({
	baseURL: API_URL
})

api.interceptors.request.use(async config => {
	return config
})

export default api
