import React from 'react'
import { Box, Button, Container, TextField, Typography } from '@mui/material'

const LoginForm = ({ setPublicKey, setPrivateKey, handleLogin }) => {
	return (
		<Container>
			<Box>
				<Typography variant='h4' gutterBottom component='div' mt={2}>
					Вход в систему
				</Typography>
				<div>
					<TextField
						id='outlined-basic'
						label='Публичный ключ'
						variant='outlined'
						onChange={(e) => setPublicKey(e.target.value)}
						fullWidth
						size='small'
						sx={{
							mt: 1
						}}
					/>
					<TextField
						type='password'
						id='outlined-basic'
						label='Приватный ключ'
						variant='outlined'
						onChange={(e) => setPrivateKey(e.target.value)}
						fullWidth
						size='small'
						sx={{
							mt: 1
						}}
					/>
					<Box mt={2}></Box>
					<Button variant='contained' onClick={() => handleLogin()}>Войти</Button>
				</div>
			</Box>
		</Container>
	)
}

export default LoginForm