import React from 'react'
import { Avatar, Grid, makeStyles, Paper } from '@material-ui/core'
import { useHistory } from 'react-router'
import defaultPic from '../../img/raga.jpg'

const useStyles = makeStyles((theme) => ({
	container: {
		border: '1px solid #0008',
		background:
			'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
		padding: '30px 90px',
		marginBottom: 5,
		cursor: 'pointer',
	},
	name: {
		marginLeft: 10,
		textTransform: 'capitalize',
	},
}))

const HackerItem = ({ hacker }) => {
	const classes = useStyles()
	const history = useHistory()
	const userId = hacker._id
	return (
		<Paper
			className={classes.container}
			onClick={() => history.push(`/profile/${userId}`)}>
			<Grid container item alignItems='center' spacing={2}>
				<Avatar
					src={hacker.avatar ? hacker.avatar : defaultPic}
					alt='profile picture'
				/>
				<Grid item className={classes.name}>
					{hacker.name}
				</Grid>
			</Grid>
		</Paper>
	)
}

export default HackerItem
