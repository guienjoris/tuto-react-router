import React from 'react';
import {Link} from 'react-router-dom';

function Navigation(){

    return(
        <ul style={{display:'flex'}}>
            <Link to='/'>
            <li style={{marginLeft:10, listStyle:'none'}}>Accueil</li>
            </Link>
            <Link to='/projets'>
            <li style={{marginLeft:10, listStyle:'none'}}>Projets</li>
            </Link>
            <Link to='/contact'>
            <li style={{marginLeft:10, listStyle:'none'}}>Contact</li>
            </Link>
        </ul>
    )
}

export default Navigation;