import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav() {

    return(
        <nav className='nav'>
            <Link to="/angel">
                <button className='btn'>black</button>
            </Link>
            <Link to="/victor">
                <button className='btn'>white</button>
            </Link>
        </nav>
    );
}