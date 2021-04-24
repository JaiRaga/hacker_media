import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

// Create a theme instance.
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#1976d2',
		},
		secondary: {
			main: '#dc004e',
		},
		error: {
			main: red.A400,
		},
		update: {
			main: '#6a197d',
		},
		background: {
			default: '#fff',
		},
	},
	overrides: {
		MuiDrawer: {
			paper: {
				background: `linear-gradient(180deg, rgba(55,237,206,1) 0%, rgba(0,226,255,1) 100%, rgba(9,97,236,1) 100%)`,
			},
		},
	},
})

export default theme
