import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav(){
    return (
        <nav className='nav'>
        <div className='nav-inner'>
            <Link to='/' className='brand'>Mi Portfolio</Link>
            <div>
                <Link to="/projects" >Proyectos </Link>
                <Link to="/contact" >Contacto </Link>
            </div>
        </div>
    </nav>
    );
}