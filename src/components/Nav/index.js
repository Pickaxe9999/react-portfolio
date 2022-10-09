import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

    return (
        <header>
            <nav className='navbar'>
                <ul className="flex-row">
                    <li className="mx-2">
                        <Link to='/'>
                          <h2>
                            Jacob Hannah
                          </h2>
                        </Link>
                    </li>
                    <li className='mx-2'>
                        <Link to='/projects'>
                            Projects
                        </Link>
                    </li>
                    <li className='mx-2'>
                        <Link to='/contact'>
                            Contact
                        </Link>
                    </li>
                    <li className='mx-2'>
                        <a href="#footer">
                            More
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;