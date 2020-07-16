const
	config = require('../Configuration')
jwt = require('jsonwebtoken'),
	JWT_SECRET = config.jwtSecret
axios = require('axios')

function signToken(username) {
	return jwt.sign(username, JWT_SECRET)
}

function verifyToken(req, res, next) {

	const token = req.get('token') || req.body.token || req.query.token

	if (!token) {
		res.status(401)
		return res.json({ success: false, message: "No token provided" })
	}

	jwt.verify(token, JWT_SECRET, (err, decodedData) => {
		// if problem with token verification, deny access
		if (err) {
			res.status(401)
			return res.send({ success: false, message: "Invalid token." })
		}

		// otherwise, search for user by id that was embedded in token
		axios.get(`${config.DBIp}/users/${decodedData.id}`)
			.then((dbRes) => {
				req.user = dbRes.data.user
				next()
			}
			)
			.catch((err) => {
				res.status(500)
				res.send(err)
			})
	})
}

module.exports = {
	signToken,
	verifyToken
}