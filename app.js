
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const db = require('./config/db/dbConnection')
const apiUser = require('./api/routes/user')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
db.connect()

// set middleware , whenever request to url that have a "/api" will trigger apiUser
app.use('/api', apiUser)

app.listen(port, () => {

    console.log('Listening')
})
