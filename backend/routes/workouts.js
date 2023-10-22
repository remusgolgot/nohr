const express = require('express')
const {
    createWorkout,
    getWorkout,
    listWorkouts,
    updateWorkout,
    deleteWorkout
} = require('../controllers/workoutController')

const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

router.use(requireAuth)

// GET all workouts
router.get('/', listWorkouts)

// GET a single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a new workout
router.delete('/:id', deleteWorkout) 

// UPDATE a new workout
router.patch('/:id', updateWorkout) 

module.exports = router