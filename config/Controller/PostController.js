
const UserModel = require('../models/PostModel')

class UserController {

    async getAll(req, res) {
        // PostModel.find()
        //     .then(post => res.json(post))
        //     .catch(err => res.send('Not found'))

        const listPost = await UserModel.find()

        res.json(listPost)

    }

    async getUserById(req, res) {

        let postResult = await UserModel.findById(req.params.id)

        res.json(postResult)

    }

    async addNewUser(req, res) {


        let newPost = await new UserModel({
            name: req.body.name,
            age: req.body.age,
            address: req.body.address
        }).save()



        res.json(newPost)

    }

    async update(req, res) {
        let UpdateUser = await UserModel.updateOne({ _id: req.params.id }, req.body)
        res.json(UpdateUser)
    }


    async delete(req, res) {
        let deleteUser = await UserModel.deleteOne({ _id: req.params.id })
        res.json(deleteUser)
    }


}

module.exports = new UserController()