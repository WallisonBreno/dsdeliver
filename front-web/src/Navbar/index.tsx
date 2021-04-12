import './styles.css'
import {ReactComponent as Logo} from './Group.svg'

function Navbar(){
    return(
        <nav className="main">
            <Logo/>
            <a href="home" className="logo-text">Ds-Delivery</a>
        </nav>
    )
}

export default Navbar;