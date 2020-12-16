const express = require('express')
const UserController = require('../../config/Controller/PostController')
const router = express.Router()


router.get('/user', UserController.getAll)

router.post('/user', UserController.addNewUser)

router.get('/user/:id', UserController.getUserById)

router.put('/user/:id', UserController.update)

router.delete('/user/:id', UserController.delete)

module.exports = router