import {useState} from 'react'
import {useSignup} from '../hooks/useSignup'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const {signup, isLoading, error} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password, role)
    }

    return (
        <form className = "signup" onSubmit = {handleSubmit}>
            <h3>Signup </h3>
            <label>Email:</label>
            <input
                type = "email"
                onChange = {(e) => setEmail(e.target.value)}
                value = {email}
            ></input>
            <label>Password:</label>
            <input
                type = "password"
                onChange = {(e) => setPassword(e.target.value)}
                value = {password}
            ></input>
            <label>Role:</label>
            <select 
                name="roles" id="roles" form="signup"
                onChange={(e) => setRole(e.target.value)}>
                <option disabled selected value> -- select an option -- </option>
                <option value="company">COMPANY</option>
                <option value="expert">EXPERT</option>
            </select>
            <br/>
            <br/>
            <button disabled={isLoading}> SignUp </button>  
            {error && <div className="error">{error}</div>}
        </form>
    
    )
}

export default Signup