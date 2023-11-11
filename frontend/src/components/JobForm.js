import { useState } from 'react'
import { useJobContext } from '../hooks/useJobContext'
import { useAuthContext } from '../hooks/useAuthContext'

const JobForm = () => {

    const { dispatch } = useJobContext()
    const { user } = useAuthContext()
    const [title, setTitle]  = useState('')
    const [minSalary, setMinSalary]  = useState('')
    const [maxSalary, setMaxSalary]  = useState('')
    const [type, setType]  = useState('')
    const [error, setError]  = useState(null)
    const [emptyFields, setEmptyFields]  = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user) {
            setError('You must be logged in')
            return
        }

        const job = {title, minSalary, maxSalary, type}
        console.log(job);
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
            setMinSalary('')
            setMaxSalary('')
            setType('')
            setEmptyFields([])
            setError(null)
            console.log('New job added', json)
            dispatch({type: 'CREATE_JOB', payload : json})
        }
    }

    return (
       <form id="jobForm" className="create" onSubmit= {handleSubmit}>
        <h3>
            Add a New Job
        </h3>
        <label> Title: </label>
        <input
            type = "text"
            onChange= {(e) => setTitle(e.target.value)}
            value={title}
            className = {error || emptyFields.includes('title') ? 'error' : ''}
        >
        </input>

        <label> Min Salary($): </label>
        <input
            type = "number"
            onChange= {(e) => setMinSalary(e.target.value)}
            value={minSalary}
            className = {error || emptyFields.includes('minSalary') ? 'error' : ''}
        >
        </input>

        <label> Max Salary($): </label>
        <input
            type = "number"
            onChange= {(e) => setMaxSalary(e.target.value)}
            value={maxSalary}
            className = {error || emptyFields.includes('maxSalary') ? 'error' : ''}
        >
        </input>

        <label for="types">JobType:</label>
        <select 
            name="types" id="types" form="jobForm"
            onChange={(e) => setType(e.target.value)}
        >
            <option disabled selected value> -- select an option -- </option>
            <option value="HYBRID">Hybrid</option>
            <option value="REMOTE">Remote</option>
            <option value="ONSITE">Onsite</option>
        </select>
        <br/>
        <br/>

        {/* <label> Type: </label> */}
        {/* <div>
            <Select 
                options={options} 
                onChange= {(e) => setType(e.target.value)}
                value={type}>
            </Select>
        </div> */}
        {/* <select name="jobType">
        <option value="REMOTE">Remote</option>
        <option value="HYBRID">Hybrid</option>
        <option value="ONSITE">Onsite</option>
      </select> */}
        {/* <input
            type = "text"
            onChange= {(e) => setType(e.target.value)}
            value={type}
            className = {error || emptyFields.includes('type') ? 'error' : ''}
        >
        </input> */}

        <button> Add job</button>  
        {error && <div className = "error">{error}</div>}
        </form>

      
    )
}

export default JobForm