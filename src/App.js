import { Navigate, Route, Routes } from 'react-router-dom'
import NoMatch from './layouts/NoMatch'
import PublicRoutes from './layouts/PublicRoutes'
import PrivateRoutes from './layouts/PrivateRoutes'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

function App() {
	return (
		<Routes>
			<Route
				path='/'
				element={<Navigate to='/auth' replace />}
			/>
			<Route
				path='/auth'
				element={
					<PublicRoutes>
						<LoginPage />
					</PublicRoutes>
				}
			/>
			<Route
				path='/dashboard'
				element={
					<PrivateRoutes>
						<HomePage />
					</PrivateRoutes>
				}
			/>
			<Route path='*' element={<NoMatch />} />
		</Routes>
	)
}

// function App() {
// 	return (
// 		<div className='App'>
// 			<Routes>
// 				<Route path='/auth' element={<PublicRoutes />}>
// 					<LoginPage />
// 				</Route>
// 				<Route path='/' element={<PrivateRoutes />}>
// 					<HomePage />
// 				</Route>
// 				<Route path='*' element={<NoMatch />} />
// 			</Routes>
// 		</div>
// 	)
// }

export default App
