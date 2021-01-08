import './styles.css';
import { ReactComponent as InstagramIcon } from './Instagram.svg';

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