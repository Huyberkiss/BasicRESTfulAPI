const mongoose = require('mongoose')
const Schema = mongoose.Schema

// make a schema for model
const User = new Schema({

    name: { type: String, maxlength: 40 },
    age: { type: Number },
    address: { type: String, maxlength: 100 }
}, { versionKey: false })

module.exports = mongoose.model('User', User)