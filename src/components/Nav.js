import logo from '../images/logo.png'
import colorLogo from '../images/logo-2.png'

const Nav = ({minimal, setShowModal, showModal, setIsSignUp}) => {

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }

    const authToken = false

    return (
        <nav>
            <div className="logo-container">
                <img className="logo" alt="logo" src={minimal ? colorLogo : logo}/>
            </div>

            {!authToken && !minimal && <button 
            className='nav-button'
            onClick={handleClick}
            disabled={showModal}
                >Log in</button>
            }
     </nav>
    )
}

export default Nav