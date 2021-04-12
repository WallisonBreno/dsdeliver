import {ReactComponent as YoutubeIcon} from './Youtube.svg'
import {ReactComponent as InstagramIcon} from './Instagram.svg'
import {ReactComponent as LinkedinIcon} from './Linkedin.svg'
import './styles.css'

function Footer (){
    return(
        <>
        <footer className="main-footer">
            app desenvolvido na semana DevSuperior
            <div className="footer-icons">
                <a href="Youtube">
                    <YoutubeIcon/>
                </a>
                <a href="Linkedin">
                    <LinkedinIcon/>
                </a>
                <a href="Instagram">
                    <InstagramIcon/>
                </a>
            </div>
        </footer>
        </>
    )
}

export default Footer;