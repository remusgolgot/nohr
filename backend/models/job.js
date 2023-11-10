const mongoose = require('mongoose')

const Schema = mongoose.Schema

const jobSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    minSalary: {
        type: Number,
        required: true
    },
    maxSalary: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum : ['REMOTE','HYBRID', 'ONSITE'],
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
