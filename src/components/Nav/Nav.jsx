import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav() {

    return(
        <nav className='nav-'>
            <Link to="/dark">
                <button className='btn-dark'>dark</button>
            </Link>
            <Link to="/light">
                <button className='btn-light'>light</button>
            </Link>
        </nav>
    );
}