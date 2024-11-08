// src/components/Header.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBook, FaComments, FaChalkboardTeacher, FaUser, FaVideo, FaQuestion, FaCog, FaPoll, FaClipboardList, FaTimes, FaBars } from 'react-icons/fa';
import '../Styles/HeaderStyles.css';

const navLinks = [
    { to: '/', icon: <FaHome />, text: 'Home' },
    { to: '/articles', icon: <FaBook />, text: 'Articles' },
    { to: '/chat', icon: <FaComments />, text: 'Chat' },
    { to: '/courses', icon: <FaChalkboardTeacher />, text: 'Courses' },
    { to: '/explore', icon: <FaPoll />, text: 'Explore' },
    { to: '/forum', icon: <FaComments />, text: 'Forum' },
    { to: '/profile', icon: <FaUser />, text: 'Profile' },
    { to: '/quiz', icon: <FaQuestion />, text: 'Quiz' },
    { to: '/settings', icon: <FaCog />, text: 'Settings' },
    { to: '/survey', icon: <FaClipboardList />, text: 'Survey' },
    { to: '/videos', icon: <FaVideo />, text: 'Videos' },
];

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);


    return (
        <header className="header">
            <div className="header-logo">
                <h1>Educacy</h1>
            </div>
            {!isMenuOpen && <button className="menu-toggle" onClick={toggleMenu}>
                <FaBars />
            </button>}
            <nav className={`header-nav ${isMenuOpen ? 'open' : 'closed'}`}>
                <ul>
                    <li>
                        {isMenuOpen &&
                            <button className="menu-toggle" onClick={toggleMenu}>
                                <FaTimes />
                            </button>}

                    </li>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.to} onClick={closeMenu} className="nav-link">
                                {link.icon}
                                <span>{link.text}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}



export default Header;
