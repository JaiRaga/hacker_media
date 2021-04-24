import { combineReducers } from 'redux'
import auth from './reducers/auth'
import profile from './reducers/profile'
import hackers from './reducers/hackers'

const rootReducer = combineReducers({
	auth,
	profile,
	hackers,
})

export default rootReducer
