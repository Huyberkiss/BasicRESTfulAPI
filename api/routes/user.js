const express = require('express')
const UserController = require('../../config/Controller/PostController')
const router = express.Router()

// [GET] 
router.get('/user', UserController.getAll)

// [POST]
router.post('/user', UserController.addNewUser)
//[GET] by id
router.get('/user/:id', UserController.getUserById)

//[PUT]
router.put('/user/:id', UserController.update)

//[DELETE]
router.delete('/user/:id', UserController.delete)

module.exports = router