import { useState } from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutContext'
import { useAuthContext } from '../hooks/useAuthContext'

const WorkoutForm = () => {

    const { dispatch } = useWorkoutContext()
    const { user } = useAuthContext()
    const [title, setTitle]  = useState('')
    const [load, setLoad]  = useState('')
    const [reps, setReps]  = useState('')
    const [error, setError]  = useState(null)
    const [emptyFields, setEmptyFields]  = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user) {
            setError('You must be logged in')
            return
        }

        const workout = {title, load, reps}
        const response = await fetch('/api/workouts', {
            method : 'POST',
            body : JSON.stringify(workout),
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        } else {
            setTitle('')
            setLoad('')
            setReps('')
            setEmptyFields([])
            setError(null)
            console.log('New workout added', json)
            dispatch({type: 'CREATE_WORKOUT', payload : json})
        }
    }

    return (
       <form className="create" onSubmit= {handleSubmit}>
        <h3>
            Add a New Workout
        </h3>
        <label> Exercise title: </label>
        <input
            type = "text"
            onChange= {(e) => setTitle(e.target.value)}
            value={title}
            className = {emptyFields.includes('title') ? 'error' : ''}
        >
        </input>

        <label> Load: </label>
        <input
            type = "number"
            onChange= {(e) => setLoad(e.target.value)}
            value={load}
            className = {emptyFields.includes('load') ? 'error' : ''}
        >
        </input>

        <label> Reps: </label>
        <input
            type = "number"
            onChange= {(e) => setReps(e.target.value)}
            value={reps}
            className = {emptyFields.includes('reps') ? 'error' : ''}
        >
        </input>
        <button> Add workout</button>  
        {error && <div className = "error">{error}</div>}
        </form>

      
    )
}

export default WorkoutForm