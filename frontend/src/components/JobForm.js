import { useState } from 'react'
import { useJobContext } from '../hooks/useJobContext'
import { useAuthContext } from '../hooks/useAuthContext'

const JobForm = () => {

    const { dispatch } = useJobContext()
    const { user } = useAuthContext()
    const [title, setTitle]  = useState('')
    const [salary, setSalary]  = useState('')
    const [error, setError]  = useState(null)
    const [emptyFields, setEmptyFields]  = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user) {
            setError('You must be logged in')
            return
        }

        const job = {title, salary}
        const response = await fetch('/api/jobs', {
            method : 'POST',
            body : JSON.stringify(job),
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
            setSalary('')
            setEmptyFields([])
            setError(null)
            console.log('New job added', json)
            dispatch({type: 'CREATE_JOB', payload : json})
        }
    }

    return (
       <form className="create" onSubmit= {handleSubmit}>
        <h3>
            Add a New Job
        </h3>
        <label> Title: </label>
        <input
            type = "text"
            onChange= {(e) => setTitle(e.target.value)}
            value={title}
            className = {emptyFields.includes('title') ? 'error' : ''}
        >
        </input>

        <label> Salary: </label>
        <input
            type = "number"
            onChange= {(e) => setSalary(e.target.value)}
            value={salary}
            className = {emptyFields.includes('salary') ? 'error' : ''}
        >
        </input>

        <button> Add job</button>  
        {error && <div className = "error">{error}</div>}
        </form>

      
    )
}

export default JobForm