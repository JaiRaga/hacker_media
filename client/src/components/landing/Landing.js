import React, { Fragment } from 'react'
import { Hidden, Grid } from '@material-ui/core'
import Navbar from '../layout/Navbar'
import Drawer from '../layout/Drawer'
import Login from '../auth/Login'

const Landing = () => {
	return (
		<Fragment>
			<Hidden only={['xs', 'sm']}>
				<Navbar />
			</Hidden>
			<Hidden only={['md', 'lg', 'xl']}>
				<Drawer />
			</Hidden>

			<Grid container>
				<Login />
			</Grid>
		</Fragment>
	)
}

export default Landing
