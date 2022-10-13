import React from 'react';
import { Link } from 'react-router-dom'

export default function Nav() {

    return(
        <nav className='nav'>
            <Link to="/angel">
                <button>Angel</button>
            </Link>
            <Link to="/victor">
              <button>Victor</button>
            </Link>
        </nav>
    );
}