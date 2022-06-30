import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import api from '../service/http'


const LoginPage = () => {

	const getRequestToken = async () => {
		try {
			const result = await api.get('/oauth/requesttoken')
			const data = JSON.parse(result.data.contents)
			console.log(data)

			// await fetch('http://api.pixlpark.com/oauth/requesttoken', {
			// 	headers: {
			// 		'Content-Type': 'application/json'
			// 	},
			// 	method: 'get'
			// }).then((responce) => console.log(responce))

		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		if (!localStorage.getItem('requestToken')) {
			getRequestToken()
		}
	}, [])

	return <div>
		<h1>Авторизация</h1>
		<div>
			<input type='text' />
			<input type='password' />
			<button>Отправить</button>
		</div>
	</div>
}

const mapStateToProps = state => (
	{
		authState: state.Auth
	}
)

const mapDispatchToProps = dispatch => (
	{}
)


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)