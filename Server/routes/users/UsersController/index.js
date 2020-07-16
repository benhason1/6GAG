const
    axios = require('axios'),
    signToken = require('../../../Auth').signToken,
    config = require('../../../Configuration')

module.exports = {
    // list all users
    index: (req, res) => {
        axios.get(`${config.DBIp}/users`).
            then((dbRes) => res.send(dbRes.data))
            .catch((err) => res.send({ success: false, code: err.code }))


    },

    // get one user
    show: (req, res) => {
        axios.get(`${config.DBIp}/users/${req.params.id}`).
            then((dbRes) => res.send(dbRes.data))
            .catch((err) => res.send({ success: false, code: err.code }))

    },

    // create a new user
    create: (req, res) => {
        axios.post(`${config.DBIp}/users`).
            then((dbRes) => {
                const token = signToken(dbRes.data)
                res.send({ success: true, message: "User created. Token attached.", token })
            })
            .catch((err) => res.send({ success: false, code: err.code }))
    },

    // update an existing user
    update: (req, res) => {
        axios.post(`${config.DBIp}/users/${req.params.id}`).
            then((dbRes) => res.send({ success: true, message: "User updated.", "user": dbRes.data })
                .catch((err) => res.send({ success: false, code: err.code })))

    },


    // the login route
    authenticate: (req, res) => {
        // check if the user exists

        axios.post(`${config.DBIp}/users/search`).
            then((dbRes) => {
                if (!dbRes.user || dbRes.user['password'] != (req.body.password)) {
                    // deny access
                    return res.send({ success: false, message: "Invalid credentials." })
                }
                const token = signToken(user)
                res.send({ success: true, message: "Token attached.", token })

            })
            .catch((err) => res.send({ success: false, code: err.code }))

    }
}