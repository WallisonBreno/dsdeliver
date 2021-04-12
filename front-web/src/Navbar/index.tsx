import './styles.css'
import {ReactComponent as Logo} from './Group.svg'
import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <nav className="main">
            <Logo/>
            <Link to="/" className="logo-text">DS-Delivey</Link>
        </nav>
    )
}

export default Navbar;