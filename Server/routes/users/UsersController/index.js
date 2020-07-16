const
    axios = require('axios'),
    signToken = require('../../../Auth').signToken,
    config = require('../../../Configuration')

module.exports = {
    // list all users
    index: (req, res) => {
        axios.get(`${config.DBIp}/users`).
            then((dbRes) => res.send(dbRes.data))
            .catch((err) => {
                res.status(500)
                res.send({ success: false, code: err.code })
            })
    },

    // get one user
    show: (req, res) => {
        axios.get(`${config.DBIp}/users/${req.params.id}`).
            then((dbRes) => res.send(dbRes.data))
            .catch(
                (err) => {
                    res.status(500)
                    res.send({ success: false, code: err.code })
                })

    },

    // create a new user
    create: (req, res) => {
        if (!req.body.username || !req.body.password)
            return res.send({ success: false, message: "must have username and paswword in body" })

        let username = req.body.username
        let password = req.body.password

        //check if user exist
        axios.post(`${config.DBIp}/users/search`, { "username": username }).
            then((searchUserDbRes) => {

                userData = searchUserDbRes.data.user
                // if the user has no token he marked as doesnt exist
                if (userData && userData != 0 && userData[0].token) {
                    return res.send({ success: false, message: "User already exist." })
                }

                else {
                    axios.post(`${config.DBIp}/users`, { "username": username, "password": password })
                        .then((userCreatedDbRes) => {
                            var token = signToken(userCreatedDbRes.data.user)
                            _updateTokenInDb(userCreatedDbRes.data.user.id, token, res)
                        })
                        .catch((err) => { return res.send({ success: false, code: err.code }) })
                }
            })

            .catch((err) => { return res.send({ success: false, code: err.code }) })
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

        if (!req.body.username || !req.body.password) {
            res.status(401)
            return res.send({ success: false, message: "must have username and password in body" })
        }
        let username = req.body.username
        let password = req.body.password

        axios.post(`${config.DBIp}/users/search`, { "username": username }).
            then((dbRes) => {
                let userData = dbRes.data.user[0]
                if (!userData || userData['password'] != password) {
                    // deny access
                    res.status(501)
                    return res.send({ success: false, message: "Invalid credentials." })
                }
                const token = signToken(userData)
                _updateTokenInDb(dbRes.data.user['id'], token, res)

            })
            .catch((err) => {
                res.status(500)
                res.send({ success: false, code: err.code })
            })

    }
}


function _updateTokenInDb(userId, token, res) {
    axios.put(`${config.DBIp}/users/${userId}`, { "token": token }).
        then(_ => {
            res.send({ success: true, message: "Token attached.", token })
        })
        .catch(_ => {
            res.status(500)
            res.send({ success: false, message: "couldnt create token in db" })
        })

}

