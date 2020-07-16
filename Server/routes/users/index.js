const
    express = require('express'),
    usersRouter = new express.Router(),
    usersCtrl = require('./UsersController'),
    verifyToken = require('../../Auth').verifyToken

    
usersRouter.route('/')
    .get(usersCtrl.index)
    .post(usersCtrl.create)

usersRouter.post('/login', usersCtrl.authenticate)

usersRouter.use(verifyToken)
usersRouter.route('/:id')
    .get(usersCtrl.show)
    .put(usersCtrl.update)

module.exports = usersRouter