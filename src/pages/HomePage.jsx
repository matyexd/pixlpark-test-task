import { useEffect, useState } from 'react'
import { authUnauthorizedAction } from '../store/actions/authUserAction'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Home from '../components/Home'
import { getOrdersAction } from '../store/actions/ordersAction'

const COUNT_ORDERS = 20

const HomePage = ({ Auth, unAuthUser, getOrders, Orders }) => {
	const { orders, isLoading, error } = Orders
	const navigate = useNavigate()

	const [filtredOrders, setFiltredOrders] = useState([])
	const [currentPage, setCurrentPage] = useState(0)
	const [scrollAction, setScrollAction] = useState(false)


	const handleOrdersData = () => {
		let ordersArray = []
		orders.forEach(element => {
			const order = {
				id: element.Id,
				title: element.Title
			}

			ordersArray.push(order)
		})

		setFiltredOrders([...filtredOrders, ...ordersArray])
	}


	useEffect(() => {
		document.addEventListener('scroll', scrollHandler)

		return function() {
			document.removeEventListener('scroll', scrollHandler)
		}
	}, [])

	useEffect(() => {
		if (orders && error === '' && !isLoading) {
			console.log('хуй')
			handleOrdersData()
			setScrollAction(false)
			setCurrentPage(currentPage + 1)
		}
	}, [Orders])

	useEffect(() => {
		if (Auth.isAuth) {
			getOrders(COUNT_ORDERS, COUNT_ORDERS * currentPage)
		}
	}, [])

	useEffect(() => {
		console.log(scrollAction)
		if (scrollAction) {
			getOrders(COUNT_ORDERS, COUNT_ORDERS * currentPage)
		}
	}, [scrollAction])


	const scrollHandler = (e) => {
		if (
			e.target.documentElement.scrollHeight -
			(e.target.documentElement.scrollTop + window.innerHeight) < 100
		) {
			console.log(12)
			setScrollAction(true)
		}
	}

	const handleLogout = () => {
		unAuthUser()
		return navigate('/')
	}


	return <Home
		handleLogout={handleLogout}
		orders={filtredOrders}
		isLoadingOrders={isLoading}
		errorOrders={error}
	/>
}
const mapStateToProps = state => ({
	Orders: state.Orders,
	Auth: state.Auth
})

const mapDispatchToProps = dispatch => ({
	unAuthUser: () => dispatch(authUnauthorizedAction()),
	getOrders: (
		take = 10,
		skip = 0,
		status = ''
	) => dispatch(getOrdersAction(take, skip, status))
})


export default connect(mapStateToProps, mapDispatchToProps)(HomePage)