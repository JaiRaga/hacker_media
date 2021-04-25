import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	margin: {
		marginTop: 10,
	},
}))

const About = () => {
	const classes = useStyles()
	return (
		<Typography variant='h4' align='center' className={classes.margin}>
			Made by Raga Jai Santhosh
		</Typography>
	)
}

export default About
