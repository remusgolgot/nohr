import { useJobContext } from "../hooks/useJobContext"
import { useAuthContext } from '../hooks/useAuthContext'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const JobDetails = ({job}) => {

    const {dispatch} = useJobContext()
    const {user} = useAuthContext()

        const handleClick = async() => {
            if (!user) {
                return
            }
            const response = await fetch('/api/jobs/' + job._id, {
                method: 'DELETE',
                headers : {
                    'Authorization' : `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'DELETE_JOB', payload: json})
            }
        }

        return (
            <div className="job-details">
                 <h4>{job.title}</h4>
                 <h3>{job.company}</h3>
                 <p><strong>Min Salary ($) : </strong>{job.minSalary}</p>       
                 <p><strong>Max Salary ($) : </strong>{job.maxSalary}</p>       
                 <p><strong>Type : </strong>{job.type}</p>       
                 <br/>
                 <p>{formatDistanceToNow(new Date(job.createdAt), {addSuffix: true})}</p>
                 <span className = 'material-symbols-outlined'  onClick={handleClick}>
                    delete
                 </span>
            </div>
        )
}

export default JobDetails