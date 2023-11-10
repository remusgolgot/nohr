const Job = require('../models/job')
const mongoose = require('mongoose')

const createJob = async (req, res) => {
    const {title, company, minSalary, maxSalary, type} = req.body

    let emptyFields = []
    if (!title) {
        emptyFields.push('title')
    }
    if (!minSalary) {
        emptyFields.push('minSalary')
    }
    if (!maxSalary) {
        emptyFields.push('maxSalary')
    }
    if (!type) {
        emptyFields.push('type')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({error : 'Please fill in all the fields', emptyFields})
    }

    if (parseInt(minSalary) >= parseInt(maxSalary)) {
        return res.status(400).json({error : 'Min Salary must be lower than Max Salary'})
    }

    if (minSalary < 0) {
        return res.status(400).json({error : 'Min Salary must be greater than 0'})
    }

    if (type !== 'REMOTE' && type !== 'ONSITE' && type !== 'HYBRID') {
        return res.status(400).json({error : 'Invalid value for type'})
    }
    
    try {
      const user_id = req.user._id
      const job = await Job.create( {title, company: "META", minSalary, maxSalary, type, user_id})
      res.status(200).json(job)
    } catch(error) {
      res.status(400).json({error : error.message})
    }
}

const listJobs = async (req, res) => {
    const user_id = req.user._id
    const jobs = await Job.find({user_id}).sort({createdAt : -1})
    res.status(200).json(jobs)
}

const getJob = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error : "Not a valid ID"})
    }

    const job = await Job.findById(id)
    if (!job) {
        return res.status(404).json({error : "No such job"})
    }
    res.status(200).json(job)
}

const deleteJob = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error : "Not a valid ID"})
    }
        const job = await Job.findOneAndDelete( {_id: id})
        if (!job) {
            return res.status(404).json({error : "No job to delete"})
        }
      
      res.status(200).json(job)
}

const updateJob = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error : "Not a valid ID"})
    }
    try {
        const job = await Job.findOneAndUpdate( {_id: id}, {
            ...req.body
        })
        if (!job) {
            return res.status(404).json({error : "No job to update"})
        }
        res.status(200).json({message : 'Job updated', job : job})
      } catch(error) {
        res.status(400).json({error : error.message})
      }
}

module.exports = {
    createJob,
    listJobs,
    getJob,
    deleteJob,
    updateJob
}