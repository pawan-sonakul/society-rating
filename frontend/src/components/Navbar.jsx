import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const closeNav = () => {
        setIsNavOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-gradient fixed-top">
            <div className="container">
                <Link className="navbar-brand logo" to="/" onClick={closeNav}>
                    <i className="fas fa-gem"></i> Society Management System
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNav}
                    aria-expanded={isNavOpen ? 'true' : 'false'}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav2">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/" onClick={closeNav}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/submit" onClick={closeNav}>Submit Rating</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/ratings" onClick={closeNav}>Ratings</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-outline-light ms-2" to="/contact" onClick={closeNav}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

