import React, { Fragment } from 'react'
import { Hidden, Grid } from '@material-ui/core'
import Navbar from '../layout/Navbar'
import Drawer from '../layout/Drawer'
import Login from '../auth/Login'

const Landing = () => {
	return (
		<Fragment>
			<Grid container justify='center' alignItems='center'>
				<h4>Welcome to Hacker Media</h4>
			</Grid>
		</Fragment>
	)
}

export default Landing
