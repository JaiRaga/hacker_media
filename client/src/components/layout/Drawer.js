import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { AppBar, Toolbar, Typography, Hidden, Button } from '@material-ui/core'
import DehazeIcon from '@material-ui/icons/Dehaze'
import AdjustIcon from '@material-ui/icons/Adjust'
import ComputerIcon from '@material-ui/icons/Computer'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import PersonIcon from '@material-ui/icons/Person'
import HomeIcon from '@material-ui/icons/Home'
import PersonPinIcon from '@material-ui/icons/PersonPin'
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun'
import { Link, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/auth'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	appbar: {
		background: `linear-gradient(90deg, rgba(55,237,217,1) 0%, rgba(0,121,255,1) 100%, rgba(111,9,236,1) 100%)`,
	},
	toolbar: {
		display: 'flex',
	},
	heading: {
		color: '#000',
	},
	btns: {
		marginLeft: 'auto',
	},
	btn: {
		color: '#ffd384',
	},
	list: {
		width: 300,
	},
	display: {
		[theme.breakpoints.down('md')]: {
			display: 'flex',
		},
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	grid: {
		paddingBottom: 3,
		paddingLeft: 20,
	},
	link: {
		textDecoration: 'none',
		color: '#312c51',
	},
	icons: {
		color: '#fff',
		minWidth: '35px',
		paddingRight: 20,
	},
	hamburger: {
		color: 'white',
	},
	title: {
		fontWeight: '800',
		padding: '5px 16px',
	},
}))

export default function SwipeableTemporaryDrawer() {
	const classes = useStyles()
	const [state, setState] = React.useState({
		left: false,
	})
	const dispatch = useDispatch()

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event &&
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return
		}

		setState({ [anchor]: open })
	}

	const authLinks = (
		<Fragment>
			<Typography className={classes.title} color='primary' variant='body1'>
				Account Info
			</Typography>
			<Divider />
			<List className={classes.list} disablePadding>
				<Link to='/profile' className={classes.link}>
					<ListItem button>
						<ListItemIcon className={classes.icons}>
							<ComputerIcon />
						</ListItemIcon>

						<ListItemText primary='Hacker Media' />
					</ListItem>
				</Link>
			</List>
			<Divider />
			<List className={classes.right}>
				<Link to='/dashboard/social' className={classes.link}>
					<ListItem button>
						<ListItemIcon className={classes.icons}>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary='Home' />
					</ListItem>
				</Link>

				<Link to='/dashboard' className={classes.link}>
					<ListItem button>
						<ListItemIcon className={classes.icons}>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary='Places' />
					</ListItem>
				</Link>

				<Link to='/profile' className={classes.link}>
					<ListItem button>
						<ListItemIcon className={classes.icons}>
							<PersonPinIcon />
						</ListItemIcon>
						<ListItemText primary='Topics' />
					</ListItem>
				</Link>

				<Link to='/setting' className={classes.link}>
					<ListItem button>
						<ListItemIcon className={classes.icons}>
							<AdjustIcon />
						</ListItemIcon>
						<ListItemText primary='Inspiration' />
					</ListItem>
				</Link>

				<Link to='/dashboard' className={classes.link}>
					<ListItem button>
						<ListItemIcon className={classes.icons}>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary='Goals' />
					</ListItem>
				</Link>

				<Link to='/profile' className={classes.link}>
					<ListItem button>
						<ListItemIcon className={classes.icons}>
							<PersonPinIcon />
						</ListItemIcon>
						<ListItemText primary='Ad Customisation' />
					</ListItem>
				</Link>

				<Link to='/setting' className={classes.link}>
					<ListItem button>
						<ListItemIcon className={classes.icons}>
							<AdjustIcon />
						</ListItemIcon>
						<ListItemText primary='People' />
					</ListItem>
				</Link>

				<Link to='/dashboard' className={classes.link}>
					<ListItem button>
						<ListItemIcon className={classes.icons}>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary='Technology milestones' />
					</ListItem>
				</Link>

				<Link to='/profile' className={classes.link}>
					<ListItem button>
						<ListItemIcon className={classes.icons}>
							<PersonPinIcon />
						</ListItemIcon>
						<ListItemText primary='Setting' />
					</ListItem>
				</Link>

				<Link to='/setting' className={classes.link}>
					<ListItem button>
						<ListItemIcon className={classes.icons}>
							<AdjustIcon />
						</ListItemIcon>
						<ListItemText primary='Post Content' />
					</ListItem>
				</Link>

				<Link to='/' className={classes.link}>
					<ListItem button onClick={() => dispatch(logout())}>
						<ListItemIcon className={classes.icons}>
							<DirectionsRunIcon />
						</ListItemIcon>
						<ListItemText primary='Logout' />
					</ListItem>
				</Link>
			</List>
		</Fragment>
	)

	const guestLinks = (
		<Fragment>
			<List className={classes.list}>
				<Link to='/dashboard' className={classes.link}>
					<ListItem button>
						<ListItemIcon className={classes.icons}>
							<ComputerIcon />
						</ListItemIcon>
						<ListItemText primary='Hacker Media' />
					</ListItem>
				</Link>
			</List>
			<Divider />
			<List className={classes.right}>
				<Link to='/login' className={classes.link}>
					<ListItem button>
						<ListItemIcon className={classes.icons}>
							<PersonIcon />
						</ListItemIcon>
						<ListItemText primary='Login' />
					</ListItem>
				</Link>

				<Link to='/register' className={classes.link}>
					<ListItem button>
						<ListItemIcon className={classes.icons}>
							<PersonAddIcon />
						</ListItemIcon>
						<ListItemText primary='Register' />
					</ListItem>
				</Link>
			</List>
		</Fragment>
	)

	const { isAuthenticated } = useSelector((state) => state.auth)

	const list = (anchor) => (
		<div
			className={classes.list}
			role='presentation'
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}>
			{isAuthenticated ? authLinks : guestLinks}
		</div>
	)

	return (
		<div className={classes.root}>
			<AppBar position='static' className={classes.appbar}>
				<Toolbar variant='dense' className={classes.toolbar}>
					<IconButton
						edge='start'
						className={classes.menuButton}
						aria-label='menu'
						onClick={toggleDrawer('left', true)}>
						<DehazeIcon />
					</IconButton>
					<Typography variant='h5' className={classes.heading}>
						Lak
					</Typography>
					<SwipeableDrawer
						anchor={'left'}
						open={state['left']}
						onClose={toggleDrawer('left', false)}
						onOpen={toggleDrawer('left', true)}>
						{list('left')}
					</SwipeableDrawer>
				</Toolbar>
			</AppBar>
		</div>
	)
}
