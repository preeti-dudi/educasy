import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBook, FaComments, FaChalkboardTeacher, FaUser, FaQuestion, FaCog, FaTimes, FaBars } from 'react-icons/fa';
import '../Styles/HeaderStyles.css';

const navLinks = [
    { to: '/', icon: <FaHome />, text: 'Home' },
    { to: '/articles', icon: <FaBook />, text: 'Articles' },
    { to: '/courses', icon: <FaChalkboardTeacher />, text: 'Courses' },
    { to: '/forum', icon: <FaComments />, text: 'Forum' },
    { to: '/profile', icon: <FaUser />, text: 'Profile' },
    { to: '/quiz', icon: <FaQuestion />, text: 'Quiz' },
    { to: '/settings', icon: <FaCog />, text: 'Settings' },
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
            <button className="menu-toggle" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <nav className={`header-nav ${isMenuOpen ? 'open' : 'closed'}`}>
                <ul>
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
