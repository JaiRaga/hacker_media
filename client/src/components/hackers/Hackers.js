import React from 'react'
import { CircularProgress, Grid, makeStyles } from '@material-ui/core'
import { useSelector } from 'react-redux'
import HackerItem from './HackerItem'

const useStyles = makeStyles((theme) => ({
	container: {
		// border: '1px solid #0008',
	},
	loading: {
		marginTop: 20,
	},
}))

const Hackers = ({ hackers }) => {
	const classes = useStyles()
	const loading = useSelector((state) => state.hackers.loading)
	return (
		<Grid
			container
			item
			// justify='center'
			// alignItems='center'
			xs={12}
			md={7}
			lg={4}
			direction='column'
			className={classes.container}>
			{loading || !hackers.length ? (
				<Grid container item justify='center' className={classes.loading}>
					<CircularProgress />
				</Grid>
			) : (
				hackers.map((hacker) => <HackerItem key={hacker._id} hacker={hacker} />)
			)}
		</Grid>
	)
}

export default Hackers
