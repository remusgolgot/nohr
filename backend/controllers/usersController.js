const User = require('../models/user')
const jwt = require('jsonwebtoken')

const listUsers = async (req, res) => {

    const users = await User.find({}).sort({createdAt : -1})
    res.status(200).json(users)
}

module.exports = { listUsers } 