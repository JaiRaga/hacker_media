const express = require('express')
const User = require('../../models/User')
const auth = require('../../middleware/auth')
const router = express.Router()

router.post('/register', async (req, res) => {
	console.log('inComing', req.body)
	const challengesSolved = Math.floor(Math.random() * 1000)
	const solutionsSubmitted = Math.floor(Math.random() * 3000) + 500
	const solutionsAccepted = Math.floor(Math.random() * 500)
	const dataStructures = Math.floor(Math.random() * 100)
	const algorithms = Math.floor(Math.random() * 100)
	const cpp = Math.floor(Math.random() * 100)
	const java = Math.floor(Math.random() * 100)
	const python = Math.floor(Math.random() * 100)
	const html = Math.floor(Math.random() * 100)
	const javascript = Math.floor(Math.random() * 100)

	const user = new User({
		...req.body,
		challengesSolved,
		solutionsAccepted,
		solutionsSubmitted,
	})

	const competitivePercentile = {
		dataStructures,
		algorithms,
		cpp,
		java,
		python,
		html,
		javascript,
	}

	user.competitivePercentile.push(competitivePercentile)

	let rank = solutionsAccepted / solutionsSubmitted
	rank +=
		(dataStructures + algorithms + cpp + java + python + html + javascript) /
		700
	user.percentile = parseFloat((rank * 100).toFixed(2))

	try {
		const users = await User.find({})
		const ranks = []
		users.forEach((user) => ranks.push(user.percentile))
		console.log('**********RANKS**********', ranks)
		ranks.push(user.percentile)
		const overallRank = ranks.sort().indexOf(user.percentile)

		user.overallRank = overallRank + 1

		await user.save()
		const token = await user.generateAuthToken()
		console.log('updated', user)
		res.status(201).send({ user, token })
	} catch (e) {
		res.status(400).send(e)
	}
})

router.post('/login', async (req, res) => {
	try {
		const user = await User.findByCredentials(req.body.email, req.body.password)
		const token = await user.generateAuthToken()
		res.send({ user, token })
	} catch (e) {
		res.status(400).send('Unable to Login!')
	}
})

// Get my profile
router.get('/user/me', auth, async (req, res) => {
	res.send(req.user)
})

// Get User Profile
router.get('/user/:id', auth, async (req, res) => {
	try {
		const user = await User.findById(req.params.id)
		if (!user) return res.status(404).send('No User Found!')
		res.send(user)
	} catch (err) {
		res.status(500).send('Server Error')
	}
})

// Get all Users
router.get('/users', async (req, res) => {
	try {
		const users = await User.find({}).sort({ name: 1 })
		if (!users) return res.status(404).send('No Users Found')
		res.send(users)
	} catch (err) {
		res.status(500).send('Server error')
	}
})

// Update User Profile
router.patch('/user', auth, async (req, res) => {
	try {
		const { username, handle, email, avatar } = req.body
		const user = await req.user.updateUser(username, handle, email, avatar)
		res.send(user)
	} catch (err) {
		res.status(500).send('Server Error')
	}
})

// Logout user
router.post('/logout', auth, async (req, res) => {
	try {
		req.user.tokens = req.user.tokens.filter((token) => {
			return token.token !== req.token
		})

		await req.user.save()
		res.send()
	} catch (err) {
		res.status(500).send(err)
	}
})

// follow a user
router.post('/follow/:id', auth, async (req, res) => {
	try {
		const user = await User.findOne({ _id: req.params.id })

		if (!user) throw new Error("User doesn't exist!")

		user.followers.push({ userId: req.user._id })
		req.user.following.push({ userId: user._id })

		await user.save()
		await req.user.save()
		// console.log(req.user.following);
		// res.send(req.user.following);
		res.send('Success!')
	} catch (err) {
		res.status(400).send('Unable to follow user!')
	}
})

// unfollow route
router.post('/unfollow/:id', auth, async (req, res) => {
	try {
		const user = await User.findOne({ _id: req.params.id })

		if (!user) throw new Error("User doesn't exist")

		user.followers = user.followers.filter(
			(follower) => follower.userId.toString() !== req.user._id.toString()
		)

		req.user.following = req.user.following.filter(
			(follow) => follow.userId.toString() !== req.params.id
		)

		await user.save()
		await req.user.save()
		// console.log(req.user.following);
		// res.send(req.user.following);
		res.send('Success!')
	} catch (err) {
		res.status(400).send('Unable to Unfollow user!')
	}
})

// get number of followers
router.get('/followers', auth, async (req, res) => {
	try {
		const followers = req.user.followers
		Promise.all(
			followers.map(async (follower) => {
				let user = await User.findById(follower.userId)
				if (user) return user
			})
		)
			.then((result) => res.send(result))
			.catch((err) => res.send(err))
		// res.send(followers);
	} catch (err) {
		res.status(400).send('Unable to get Followers!')
	}
})

// get number of following users
router.get('/following', auth, async (req, res) => {
	try {
		const following = req.user.following
		Promise.all(
			following.map(async (follow) => {
				let user = await User.findById(follow.userId)
				if (user) return user
			})
		)
			.then((result) => res.send(result))
			.catch((err) => res.send(err))
		// res.send(followers);
	} catch (err) {
		res.status(400).send('Unable to get Followers!')
	}
})

module.exports = router
