import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const OrdersTable = ({ orders, setLastElement }) => {
	console.log(orders)

	return (
		<TableContainer component={Paper} sx={{ mt: 3 }}>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>№</TableCell>
						<TableCell>Название заказа</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{orders.map((row, index) => (
						index === orders.length - 1 ?
							<TableRow
								key={row.id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								ref={setLastElement}
							>
								<TableCell component='th' scope='row'>
									{index + 1}
								</TableCell>
								<TableCell>{row.title}</TableCell>
							</TableRow>
							:
							<TableRow
								key={row.id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component='th' scope='row'>
									{index + 1}
								</TableCell>
								<TableCell>{row.title}</TableCell>
							</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default OrdersTable