import React from 'react';
import Logo from '../../assests/img/Logo.png'
import './Menu.css'
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';

import { Link } from 'react-router-dom';

function Menu (){
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Ana julia Flix Logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/Video">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;