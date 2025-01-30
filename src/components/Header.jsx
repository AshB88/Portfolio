import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><Link to="/">About Me</Link></li>
                    <li><Link to="/Portfolio">Portfolio</Link></li>
                    <li><Link to="/Resume">Resume</Link></li>                    
                    <li><Link to ="/Contact">Contact Me</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;