import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import { checkAuthAction } from '../store/actions/authUserAction'
import { Navigate } from 'react-router-dom'
import { CircularProgress } from '@mui/material'

const PrivateRoutes = ({ children, authState, checkAuth }) => {

	const [isAuth, setIsAuth] = useState(true)

	useEffect(() => {
		if (localStorage.getItem('accessToken')) {
			checkAuth()
		}
	}, [])

	if (!localStorage.getItem('accessToken')) {
		return <Navigate to='/auth' />
	}

	if (authState.isLoading) {
		return <CircularProgress />
	}

	return children
}

const mapStateToProps = state => ({
	authState: state.Auth
})

const mapDispatchToProps = dispatch => ({
	checkAuth: () => dispatch(checkAuthAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoutes)