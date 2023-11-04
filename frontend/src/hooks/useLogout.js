import {useAuthContext} from './useAuthContext'
import {useJobContext} from './useJobContext'

export const useLogout = () => {

    const { dispatch } = useAuthContext()
    const { dispatch: dispatchJobs } = useJobContext()

    const logout = () => {
        localStorage.removeItem('user')

        dispatch({type: 'LOGOUT'})
        dispatchJobs({type: 'SET_JOBS', payload: null})
    }
    return { logout}
}