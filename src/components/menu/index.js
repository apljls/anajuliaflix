import React from 'react';
import Logo from '../../assests/img/Logo.png'
import './Menu.css'
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu (){
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="LimaFlix Logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Netflix da AnaJulia
            </Button>
        </nav>
    );
}

export default Menu;