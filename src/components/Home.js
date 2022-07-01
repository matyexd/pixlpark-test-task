import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material'

const Home = ({ handleLogout }) => {
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
				<div>Вы авторизованы</div>
			</Container>

		</>
	)


}

export default Home