const Job = require('../models/job')
const mongoose = require('mongoose')

const createJob = async (req, res) => {
    const {title, salary} = req.body

    let emptyFields = []
    if (!title) {
        emptyFields.push('title')
    }
    if (!salary) {
        emptyFields.push('salary')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({error : 'Please fill in all the fields', emptyFields})
    }
    
    try {
      const user_id = req.user._id
      const job = await Job.create( {title, salary, user_id})
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