import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-gradient fixed-top">
            <div className="container">
                <Link className="navbar-brand logo" to="/">
                    <i className="fas fa-gem"></i> Society Management System
                </Link>


                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav2"
                    aria-controls="navbarNav2"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav2">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/submit">Submit Rating</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/ratings">Ratings</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-outline-light ms-2" to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
