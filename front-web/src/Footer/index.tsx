import './styles.css';
import { ReactComponent as InstagramIcon } from './Instagram.svg';
import { ReactComponent as GitHubIcon } from './Git.svg';   
import { ReactComponent as FacebookIcon } from './Facebook.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.instagram.com/?hl=pt-br" target="_new">
                   <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;