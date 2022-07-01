import { authUnauthorizedAction } from '../store/actions/authUserAction'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Home from '../components/Home'

const HomePage = ({ unAuthUser }) => {

	const navigate = useNavigate()

	const handleLogout = () => {
		unAuthUser()
		return navigate('/')
	}

	return <Home handleLogout={handleLogout} />
}
const mapStateToProps = state => ({
	authState: state.Auth
})

const mapDispatchToProps = dispatch => ({
	unAuthUser: () => dispatch(authUnauthorizedAction())
})


export default connect(mapStateToProps, mapDispatchToProps)(HomePage)