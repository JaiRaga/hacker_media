import {
	CREATE_POST,
	GET_POSTS,
	GET_POST,
	UPDATE_POST,
	DELETE_POST,
} from '../actions/types';

const intialState = {
	post: null,
	posts: [],
	likes: [],
	views: [],
	tags: [],
	comments: [],
	loading: true,
	error: [],
};

export default (state = intialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case CREATE_POST:
			return {
				...state,
				posts: [payload, ...state.posts],
				loading: false,
			};

		case GET_POSTS:
			return {
				...state,
				posts: payload,
				loading: false,
			};

		case GET_POST:
			return {
				...state,
				post: payload,
				loading: false,
			};

		case UPDATE_POST:
			return {
				...state,
				posts: state.posts.map((post) =>
					post._id === payload._id ? payload : post
				),
				loading: false,
			};

		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter((post) => post._id !== payload),
				loading: false,
			};

		default:
			return state;
	}
};
