
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const db = require('./config/db/dbConnection')
const apiUser = require('./api/routes/user')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
db.connect()

app.use('/api', apiUser)

app.listen(port, () => {

    console.log('Listening')
})
