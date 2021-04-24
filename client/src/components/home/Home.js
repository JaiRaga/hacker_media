import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import Hackers from '../hackers/Hackers'
import { getHackers } from '../../redux/actions/hackers'

const Home = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getHackers())
	}, [])

	const hackers = useSelector((state) => state.hackers.hackers)
	return (
		<Grid container justify='center' alignItems='center'>
			<Hackers hackers={hackers} />
		</Grid>
	)
}

export default Home
