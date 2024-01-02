import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {useAuthContext} from './useAuthContext'

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()
    const navigate = useNavigate();

    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers : {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setIsLoading(false)
        } else {
            localStorage.setItem('user', JSON.stringify(json))
            dispatch({type: 'LOGIN', payload: json})
            setIsLoading(false)
            // console.log(json)
            // navigate based on user role (company vs expert)
            if (json.role === 'admin') {
                navigate('/admin') 
            } else {
                if (json.role === 'expert') {
                    navigate('/expert') 
                } else {
                    if (json.role === 'company') {
                        navigate('/company') 
                    } else {
                    navigate('/home')
                    }
                }
            } 
        }
    }
    return {login, isLoading, error}
}