require('dotenv').config()

const express = require('express')
const jobRoutes = require('./routes/jobs')
const userRoutes = require('./routes/user')
const usersRoutes = require('./routes/users')
const mongoose = require('mongoose')

// app
const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/jobs', jobRoutes)
app.use('/api/user', userRoutes)
app.use('/api/users', usersRoutes)

// DB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
        console.log('listening to the records on my wall')
    })
  })
  .catch((error) => {
    console.log('DB Error')
  }) 

