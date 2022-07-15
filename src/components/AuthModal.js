import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { useCookies } from 'react-cookie'

const AuthModal = ({ setShowModal, setIsSignUp, isSignUp}) => {

    const [ email, setEmail] = useState(null)
    const [ password, setPassword] = useState(null)
    const [ confirmPassword, setConfrimPassword] = useState(null)
    const [ error, setError] = useState(null)
    const [ cookies, setCookie, removeCookie] = useCookies(['user'])

    let navigate = useNavigate()

    console.log(email, password, confirmPassword)

    const handleClick = () => {
        setShowModal(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if( isSignUp && ( password !== confirmPassword)) {
                setError('Passwords need to match!')
                return
            }

            const response = await axios.post(`https://api.ucsd26.com/${isSignUp ? 'signup' : 'login'}`, { email, password})

            setCookie('AuthToken', response.data.token)
            setCookie('UserId', response.data.userId)

            const success = response.status === 201

            if (success && isSignUp) navigate('/onboarding')
            if (success && !isSignUp) navigate('/dashboard')

            console.log('yes')

        } catch (error) {
            console.log(error)
        }
    } 

    return (
        <div className="auth-modal">
            <div className="close-icon" onClick={handleClick}></div> <br/>
            <h2>{isSignUp? 'CREATE ACCOUNT' : 'LOG IN'}</h2>
            <p>By clicking submit, you agree to our terms and conditions which can be found in our <a href="#">Privacy Policy Page.</a> <br/> <br/> {isSignUp &&<b>For your safety, make sure to NOT reuse a previously used password.</b>}</p>
            <form onSubmit={handleSubmit}>
                <input
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                required={true}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required={true}
                minLength="8"
                maxLength="20"
                onChange={(e) => setPassword(e.target.value)}
                />
                {isSignUp && <input
                type="password"
                id="password-check"
                name="password-check"
                placeholder="Confirm Password"
                required={true}
                onChange={(e) => setConfrimPassword(e.target.value)}
                />}
                <br/>
                <input className="secondary-button" type='submit'/>
                <p>{error}</p>
            </form>

            {isSignUp || <div><hr/><br/><a>Thank you for returning. Our users are growing at every hour. Sign in to explore new profiles.</a></div>}
            
        </div>
    )
}

export default AuthModal