import { useEffect, useRef, useState } from 'react'
import { authUnauthorizedAction } from '../store/actions/authUserAction'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Home from '../components/Home'
import { getOrdersAction } from '../store/actions/ordersAction'

const COUNT_ORDERS = 50

const HomePage = ({ Auth, unAuthUser, getOrders, Orders }) => {
	console.log(Orders)
	const { orders, isLoading, error } = Orders
	const navigate = useNavigate()

	const [filtredOrders, setFiltredOrders] = useState([])
	const [currentPage, setCurrentPage] = useState(0)
	const [lastElement, setLastElement] = useState(null)

	const observer = useRef(
		new IntersectionObserver(
			(entries) => {
				const first = entries[0]
				if (first.isIntersecting) {
					setCurrentPage((no) => no + 1)
				}
			})
	)

	useEffect(() => {
		const currentElement = lastElement
		const currentObserver = observer.current

		if (currentElement) {
			currentObserver.observe(currentElement)
		}

		return () => {
			if (currentElement) {
				currentObserver.unobserve(currentElement)
			}
		}
	}, [lastElement])

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
		if (orders && error === '' && !isLoading) {
			handleOrdersData()
		}
	}, [Orders])

	useEffect(() => {
		if (Auth.isAuth && error === '') {
			getOrders(COUNT_ORDERS, COUNT_ORDERS * currentPage)
		}
	}, [currentPage])

	const handleLogout = () => {
		unAuthUser()
		return navigate('/')
	}


	return <Home
		handleLogout={handleLogout}
		orders={filtredOrders}
		isLoadingOrders={isLoading}
		errorOrders={error}
		setLastElement={setLastElement}
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