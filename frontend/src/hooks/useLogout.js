import {useAuthContext} from './useAuthContext'
import {useJobContext} from './useJobContext'
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {

    const { dispatch } = useAuthContext()
    const { dispatch: dispatchJobs } = useJobContext()
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('user')

        dispatch({type: 'LOGOUT'})
        dispatchJobs({type: 'SET_JOBS', payload: null})
        navigate('/login')
    }
    return { logout}
}