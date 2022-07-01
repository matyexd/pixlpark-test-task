import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import api from '../service/http'
import { getAccessTokenAction } from '../store/actions/authUserAction'
import sha1 from '../utils/encryptData'
import LoginForm from '../components/LoginForm'


const LoginPage = ({ loginUser, authState }) => {

	const [publicKey, setPublicKey] = useState('')
	const [privateKey, setPrivateKey] = useState('')
	const [error, setError] = useState('')

	const getRequestToken = async () => {
		try {
			const result = await api.get('/oauth/requesttoken')
			const data = result.data
			await localStorage.setItem('requestToken', data.RequestToken)
		} catch (e) {

		}
	}

	useEffect(() => {
		if (authState.error) {
			setError('Неверные данные')
		}
	}, [authState])

	useEffect(() => {
		getRequestToken()
	}, [])

	const handleLogin = () => {
		let password = sha1(localStorage.getItem('requestToken') + privateKey)
		loginUser(localStorage.getItem('requestToken'), publicKey, password)
	}

	return <LoginForm
		setError={setError}
		error={error}
		setPublicKey={setPublicKey}
		setPrivateKey={setPrivateKey}
		handleLogin={handleLogin}
	/>
}

const mapStateToProps = state => (
	{
		authState: state.Auth
	}
)

const mapDispatchToProps = dispatch => ({
	loginUser: (requestToken, username, password) => dispatch(getAccessTokenAction(
		requestToken,
		username,
		password
	))
})


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)