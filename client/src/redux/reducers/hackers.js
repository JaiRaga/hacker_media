import { GET_HACKERS, HACKER_ERROR } from '../actions/types'

const initialState = {
	hackers: [],
	loading: true,
}

export default (state = initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case GET_HACKERS:
			return {
				...state,
				hackers: [...payload],
				loading: false,
			}

		default:
			return state
	}
}
