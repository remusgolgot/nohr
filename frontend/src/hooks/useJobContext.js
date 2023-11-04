import { JobsContext } from '../context/JobContext'
import { useContext } from 'react'

export const useJobContext = () => {
    const context = useContext(JobsContext)

    if (!context) {
        throw Error('context must be used inside a job context provider')
    }

    return context
}