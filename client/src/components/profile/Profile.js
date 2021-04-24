import React from 'react'
import { Avatar, Grid, makeStyles, Typography } from '@material-ui/core'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import defaultPic from '../../img/raga.jpg'

const useStyles = makeStyles((theme) => ({
	container: {
		border: '1px solid black',
	},
	avatar: {
		width: theme.spacing(12),
		height: theme.spacing(12),
	},
	data: {
		marginLeft: 10,
	},
	name: {
		textTransform: 'capitalize',
	},
}))

const Profile = () => {
	const classes = useStyles()
	const { id } = useParams()
	const profiles = useSelector((state) => state.hackers.hackers)
	let profile = profiles.filter((profile) => profile._id === id)
	profile = profile[0]
	const {
		name,
		profileLink,
		location,
		email,
		followers,
		following,
		challengesSolved,
		solutionsAccepted,
		solutionsSubmitted,
		competitivePercentile,
		overallRank,
		avatar,
	} = profile

	console.log(profile)
	return (
		<Grid container justify='center'>
			<Grid container item xs={12} md={8} className={classes.container}>
				<Avatar
					alt='profile picture'
					src={!avatar ? defaultPic : avatar}
					className={classes.avatar}
				/>
				<Grid item className={classes.data}>
					<Grid container item direction='column' spacing={1}>
						<Grid item className={classes.name}>
							{name}
						</Grid>
						<hr />
						<Grid item>Overall Rank: {overallRank}</Grid>
						<hr />
						<Grid item>Followers: {followers.length}</Grid>
						<Grid item>Following: {following.length}</Grid>
						<Grid item>Challenged Solved: {challengesSolved}</Grid>
						<Grid item>problems accepted: {solutionsAccepted}</Grid>
						<Grid item>problems submitted: {solutionsSubmitted}</Grid>
						<hr />
						<Grid item>
							<Typography variant='h6'>Competitive percentile</Typography>
						</Grid>
						<Grid item>
							Data Structures: {competitivePercentile[0].dataStructures}
						</Grid>
						<Grid item>Algorithms: {competitivePercentile[0].algorithms}</Grid>
						<Grid item>C++: {competitivePercentile[0].cpp}</Grid>
						<Grid item>Java: {competitivePercentile[0].java}</Grid>
						<Grid item>Python: {competitivePercentile[0].python}</Grid>
						<Grid item>HTML: {competitivePercentile[0].html}</Grid>
						<Grid item>Javascript: {competitivePercentile[0].javascript}</Grid>
						<hr />
						<Grid item>
							Profile Url: {`https://hackermedia.herokuapp.com${profileLink}`}
						</Grid>
					</Grid>
				</Grid>
				{/* <Grid item>/ */}

				{/* </Grid> */}
			</Grid>
		</Grid>
	)
}

export default Profile
