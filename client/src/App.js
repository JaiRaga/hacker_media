import React, { useEffect, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

// Routes
// import PrivateRoute from './components/routing/PrivateRoute'

// Components imported for Routes
import Landing from './components/landing/Landing'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

// Redux
import store from './redux/store'
import { loadUser } from './redux/actions/auth'
import { getAllTweets, getTweetsByMe } from './redux/actions/tweet'

// utils
import setAuthToken from './utils/setAuthToken'

if (localStorage.token) {
	setAuthToken(localStorage.token)
}

function App() {
	useEffect(() => {
		store.dispatch(loadUser())
		// store.dispatch(getAllTweets());
		// store.dispatch(getTweetsByMe());
	}, [])

	// console.log(moment(moment() + 36e5 * 5).twitter());

	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<Route exact path='/' component={Landing} />

					<Switch>
						<Route exact path='/register' component={Register} />
						<Route exact path='/Login' component={Login} />
						{/* <PrivateRoute exact path='/profile' component={ProfileContainer} />
						<PrivateRoute exact path='/profile/:id' component={Profile} />
						<PrivateRoute exact path='/profiles' component={Profiles} />
						<PrivateRoute exact path='/dashboard' component={Dashboard} />
						<PrivateRoute
							exact
							path='/dashboard/social'
							component={SocialDashboard}
						/>
						<PrivateRoute exact path='/followers' component={Followers} />
						<PrivateRoute exact path='/following' component={Following} />
						<PrivateRoute exact path='/setting' component={Setting} /> */}
					</Switch>
				</Fragment>
			</Router>
		</Provider>
	)
}

export default App
