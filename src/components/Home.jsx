import { AppBar, Button, CircularProgress, Container, Toolbar, Typography } from '@mui/material'
import OrdersTable from './OrdersTable'


const Home = ({ handleLogout, orders, isLoadingOrders, errorOrders, setLastElement }) => {


	return (
		<>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						Pixlpark Task
					</Typography>
					<Button color='inherit' onClick={() => handleLogout()}>Выход</Button>
				</Toolbar>

			</AppBar>
			<Container>
				<OrdersTable orders={orders} setLastElement={setLastElement} />
				{isLoadingOrders && <CircularProgress />}
				{errorOrders !== '' && <div>Ошибка</div>}
			</Container>

		</>
	)


}

export default Home