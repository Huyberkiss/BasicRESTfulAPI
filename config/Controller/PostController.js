
const UserModel = require('../models/PostModel')

/**
 * Here i used async/ await to get a document from query to mongdob
 * 
 * Defaulted setting is true logic, so i may lazy to add a try-catch block/ hope u will put it :D
 */

class UserController {


    //[GET]
    async getAll(req, res) {
        // PostModel.find()
        //     .then(post => res.json(post))
        //     .catch(err => res.send('Not found'))

        const listPost = await UserModel.find()

        res.json(listPost)

    }

    //[GET]: id
    async getUserById(req, res) {

        let postResult = await UserModel.findById(req.params.id)

        res.json(postResult)

    }
    //[POST]
    async addNewUser(req, res) {


        let newPost = await new UserModel({
            name: req.body.name,
            age: req.body.age,
            address: req.body.address
        }).save()



        res.json(newPost)

    }

    //[PUT]
    async update(req, res) {
        let UpdateUser = await UserModel.updateOne({ _id: req.params.id }, req.body)
        res.json(UpdateUser)
    }


    //[DELETE]
    async delete(req, res) {
        let deleteUser = await UserModel.deleteOne({ _id: req.params.id })
        res.json(deleteUser)
    }


}

module.exports = new UserController()