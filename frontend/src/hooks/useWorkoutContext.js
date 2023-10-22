import { WorkoutsContext } from '../context/WorkoutContext'
import { useContext } from 'react'

export const useWorkoutContext = () => {
    const context = useContext(WorkoutsContext)

    if (!context) {
        throw Error('context must be used inside a workout context provider')
    }

    return context
}