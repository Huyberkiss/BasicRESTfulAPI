const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/Blog_dev'

let connect = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log('connect successfully')

    } catch (error) {
        console.log(error)
    }
}

module.exports = { connect }