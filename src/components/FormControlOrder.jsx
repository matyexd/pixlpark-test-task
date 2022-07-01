import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const FormControlOrder = ({ status, handleChangeStatus }) => {

	return (
		<FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
			<InputLabel id='demo-simple-select-standard-label'>Статус заказа</InputLabel>
			<Select
				labelId='demo-simple-select-standard-label'
				id='demo-simple-select-standard'
				value={status}
				onChange={handleChangeStatus}
				label='Статус заказа'
			>
				<MenuItem value=''>
					<em>None</em>
				</MenuItem>
				<MenuItem value={'NotProcessed'}>NotProcessed</MenuItem>
				<MenuItem value={'AwaitingPayment'}>AwaitingPayment</MenuItem>
				<MenuItem value={'ReadyToProcessing'}>ReadyToProcessing</MenuItem>
				<MenuItem value={'DesignCoordination'}>DesignCoordination</MenuItem>
				<MenuItem value={'DesignCoordinationComplete'}>DesignCoordinationComplete</MenuItem>
				<MenuItem value={'DesignCoordinationAwaitingReply'}>DesignCoordinationAwaitingReply</MenuItem>
				<MenuItem value={'PrepressCoordination'}>PrepressCoordination</MenuItem>
				<MenuItem value={'PrepressCoordinationComplete'}>PrepressCoordinationComplete</MenuItem>
				<MenuItem value={'PrepressCoordinationAwaitingReply'}>PrepressCoordinationAwaitingReply</MenuItem>
				<MenuItem value={'Printing'}>Printing</MenuItem>
				<MenuItem value={'PrintedWithDefect'}>PrintedWithDefect</MenuItem>
				<MenuItem value={'Printed'}>Printed</MenuItem>
				<MenuItem value={'Shipped'}>Shipped</MenuItem>
				<MenuItem value={'ShippedToStorage'}>ShippedToStorage</MenuItem>
				<MenuItem value={'Returned'}>Returned</MenuItem>
				<MenuItem value={'Cancelled'}>Cancelled</MenuItem>
				<MenuItem value={'CancelledWithDefect'}>CancelledWithDefect</MenuItem>
				<MenuItem value={'Refused'}>Refused</MenuItem>
				<MenuItem value={'Delivered'}>Delivered</MenuItem>

			</Select>
		</FormControl>
	)
}

export default FormControlOrder