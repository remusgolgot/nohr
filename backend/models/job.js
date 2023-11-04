const mongoose = require('mongoose')

const Schema = mongoose.Schema

const jobSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Job', jobSchema)