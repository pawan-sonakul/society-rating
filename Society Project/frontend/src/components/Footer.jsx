import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="mt-auto">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <h5>About Us</h5>
                        <p>Society Rating System< br />
                            Provide transparent and constructive feedback on your society’s services.</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        {/* <h5>Follow Us</h5>
                        <ul className="list-inline social-icons">
                            <li className="list-inline-item"><a href="#" className="text-white"><i className="bi bi-twitter"></i></a></li>
                            <li className="list-inline-item"><a href="#" className="text-white"><i className="bi bi-twitter"></i></a></li>
                            <li className="list-inline-item"><a href="#" className="text-white"><i className="bi bi-instagram"></i></a></li>
                        </ul> */}
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-decoration-none text-white">Home</Link></li>
                            <li><Link to="/submit" className="text-decoration-none text-white">Submit Rating</Link></li>
                            <li><Link to="/ratings" className="text-decoration-none text-white">Ratings</Link></li>
                            <li><Link to="/contact" className="text-decoration-none text-white">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <hr className="mb-4" />
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>&copy; 2025 Society Management. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
