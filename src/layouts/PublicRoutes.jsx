import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { checkAuthAction } from '../store/actions/authUserAction'

const PublicRoutes = ({ children }) => {


	if (localStorage.getItem('accessToken')) {
		return <Navigate to={'/dashboard'} />
	}

	return children
}

const mapStateToProps = state => ({
	authState: state.Auth
})

const mapDispatchToProps = dispatch => ({
	checkAuth: () => dispatch(checkAuthAction())
})


export default connect(mapStateToProps, mapDispatchToProps)(PublicRoutes)