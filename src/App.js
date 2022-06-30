import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import NoMatch from './layouts/NoMatch'
import PublicRoutes from './layouts/PublicRoutes'
import PrivateRoutes from './layouts/PrivateRoutes'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/login' element={<PublicRoutes />}>
					<Route path='' element={<LoginPage />} />
				</Route>
				<Route path='/' element={<PrivateRoutes />}>
					<Route path='' element={<LoginPage />} />
				</Route>
				<Route path='*' element={<NoMatch />} />
			</Routes>
		</div>
	)
}

export default App
