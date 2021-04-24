import { combineReducers } from 'redux';
import auth from './reducers/auth';
import tweet from './reducers/tweet';
import profile from './reducers/profile';
import social from './reducers/social';

const rootReducer = combineReducers({
	auth,
	tweet,
	social,
	profile,
});

export default rootReducer;
