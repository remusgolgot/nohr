import { useEffect } from 'react'
import JobDetails from '../components/JobDetails'
import JobForm from '../components/JobForm'
import {useJobContext} from '../hooks/useJobContext'
import {useAuthContext} from '../hooks/useAuthContext'

const Home = () => {

    const {jobs, dispatch} = useJobContext()
    const {user} = useAuthContext()

    useEffect( () => {
        const fetchJobs = async () => {
        const response = await fetch('/api/jobs', {
            headers : {
                'Authorization' : `Bearer ${user.token}`
            }
        })
        const json = await response.json()
        if (response.ok) {
            dispatch({type: 'SET_JOBS', payload : json})            
        }  
    }
    if (user) {
        fetchJobs()
    } 
    }, [dispatch, user])

    return (
        <div className = "home">
           <div className="jobs">
            {jobs && jobs.map((job) => (
                <JobDetails job={job} key={job._id}/> 
            ))}
            </div>     
            <JobForm/>   
        </div>
    )
}


export default Home