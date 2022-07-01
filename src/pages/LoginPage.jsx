import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import api_auth from '../service/http'
import { getAccessTokenAction } from '../store/actions/authUserAction'
import sha1 from '../utils/encryptData'
import LoginForm from '../components/LoginForm'


const LoginPage = ({ loginUser }) => {

	const [publicKey, setPublicKey] = useState('')
	const [privateKey, setPrivateKey] = useState('')

	const getRequestToken = async () => {
		try {
			const result = await api_auth.get('/oauth/requesttoken')
			const data = result.data
			await localStorage.setItem('requestToken', data.RequestToken)
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		getRequestToken()
	}, [])

	const handleLogin = () => {
		let password = sha1(localStorage.getItem('requestToken') + privateKey)
		loginUser(localStorage.getItem('requestToken'), publicKey, password)
	}

	return <LoginForm
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