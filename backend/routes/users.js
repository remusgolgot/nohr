const express = require('express')

const router = express.Router()

const {listUsers} = require('../controllers/usersController')

// list

router.get('/', listUsers)

module.exports = router