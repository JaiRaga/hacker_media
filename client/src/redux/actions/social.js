import axios from 'axios';
import {
	CREATE_POST,
	GET_POST,
	GET_POSTS,
	UPDATE_POST,
	DELETE_POST,
	POST_ERROR,
} from './types';

// Create Posts
export const createPost = (text) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const body = JSON.stringify({ text });

	try {
		const res = await axios.post('/api/social/post', body, config);
		console.log(res);
		dispatch({ type: CREATE_POST, payload: res.data });
	} catch (error) {
		dispatch({ type: POST_ERROR });
	}
};

// Get all Posts
export const getAllPosts = () => async (dispatch) => {
	try {
		console.log(1);
		const res = await axios.get('/api/social/posts');
		console.log(2, res);
		dispatch({ type: GET_POSTS, payload: res.data });
	} catch (error) {
		dispatch({ type: POST_ERROR });
	}
};

// Get a post by id
export const getPost = (id) => async (dispatch) => {
	try {
		const res = await axios.get(`/api/social/post/${id}`);
		console.log(res);
		dispatch({ type: GET_POST, payload: res.data });
	} catch (error) {
		dispatch({ type: POST_ERROR });
	}
};

// Update a post
export const updatePost = (id, text) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const body = JSON.stringify({ text });

	try {
		console.log(1)
		const res = await axios.patch(`/api/social/post/${id}`, body, config);
		console.log(res.data);
		dispatch({ type: UPDATE_POST, payload: res.data });
	} catch (err) {
		dispatch({ type: POST_ERROR });
	}
};

// Delete Post
export const deletePost = (id) => async (dispatch) => {
	try {
		await axios.delete(`/api/social/post/${id}`);
		dispatch({ type: DELETE_POST, payload: id });
	} catch (err) {
		dispatch({ type: POST_ERROR });
	}
};
