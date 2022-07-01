import { AppBar, Button, CircularProgress, Container, Toolbar, Typography } from '@mui/material'
import OrdersTable from './OrdersTable'
import FormControlOrder from './FormControlOrder'


const Home = ({ handleLogout, orders, isLoadingOrders, handleChangeStatus, status, errorOrders, setLastElement }) => {


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

				<FormControlOrder handleChangeStatus={handleChangeStatus} status={status} />

				<OrdersTable orders={orders} setLastElement={setLastElement} />
				{isLoadingOrders && <CircularProgress />}
				{errorOrders !== '' && <div>Ошибка</div>}
			</Container>

		</>
	)


}

export default Home