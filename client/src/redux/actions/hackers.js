import axios from 'axios'
import { GET_HACKERS, HACKER_ERROR } from './types'

export const getHackers = () => async (dispatch) => {
	try {
		const res = await axios.get('/api/users')
		console.log('users', res.data)
		dispatch({ type: GET_HACKERS, payload: res.data })
	} catch (err) {
		dispatch({ type: HACKER_ERROR })
	}
}
