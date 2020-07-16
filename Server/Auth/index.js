const
	config = require('../Configuration')
jwt = require('jsonwebtoken'),
	JWT_SECRET = config.jwtSecret
axios = require('axios')
// function for creating tokens
function signToken(username) {
	// toObject() returns a basic js object with only the info from the db
	return jwt.sign(username, JWT_SECRET)
}

// function for verifying tokens
function verifyToken(req, res, next) {
	// grab token from either headers, req.body, or query string
	const token = req.get('token') || req.body.token || req.query.token
	// if no token present, deny access
	if (!token) {
		res.status(401)
		return res.json({ success: false, message: "No token provided" })
	}
	// otherwise, try to verify token
	jwt.verify(token, JWT_SECRET, (err, decodedData) => {
		// if problem with token verification, deny access
		if (err) {
			res.status(401)
			return res.send({ success: false, message: "Invalid token." })
		}
		// otherwise, search for user by id that was embedded in token

		axios.get(`${config.DBIp}/users/${decodedData._id}`)
			.then((dbRes) => req.user = dbRes.data.user)
		next()
	})
}

module.exports = {
	signToken,
	verifyToken
}