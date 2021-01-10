import './styles.css';
import { ReactComponent as InstagramIcon } from './Instagram.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª no evento Semana DevSuperior <br /> Copyright 2020 Igor Henrique(ptmgkira). All rights reserved.
            <div className="footer-icons">
                <a href="https://www.instagram.com/?hl=pt-br" target="_new">
                   <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;