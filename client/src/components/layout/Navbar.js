import React, { useState } from 'react'
import {
	makeStyles,
	AppBar,
	Toolbar,
	IconButton,
	Hidden,
	Typography,
	Button,
} from '@material-ui/core'
import DomainIcon from '@material-ui/icons/Domain'
import Drawer from './Drawer'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
		// backgroundColor: '#000',
	},
	appbar: {
		background: `linear-gradient(90deg, rgba(55,237,217,1) 0%, rgba(0,121,255,1) 100%, rgba(111,9,236,1) 100%)`,
	},
	toolbar: {
		display: 'flex',
	},
	title: {
		color: '#000',
	},
	btns: {
		marginLeft: 'auto',
	},
	btn: {
		color: '#ffd384',
	},
}))

const Navbar = () => {
	const classes = useStyles()
	const [toggleSidebar, setToggleSidebar] = useState(false)

	return (
		<div className={classes.root}>
			<AppBar position='static' className={classes.appbar}>
				<Toolbar variant='dense' className={classes.toolbar}>
					<IconButton
						edge='start'
						className={classes.menuButton}
						aria-label='menu'>
						<DomainIcon />
					</IconButton>
					<Typography variant='h5' className={classes.title}>
						Lak
					</Typography>
					<Hidden only={['xs', 'sm']}>
						<div className={classes.btns}>
							<Button className={classes.btn}>Login</Button>
							<Button className={classes.btn}>Sign Up</Button>
							<Button className={classes.btn}>About</Button>
							{/* <Button className={classes.btn}>Suggestions</Button> */}
						</div>
					</Hidden>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default Navbar
