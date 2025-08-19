import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <>
        <header className="hero-section text-white text-center d-flex align-items-center">
            <div className="container py-5">
                <h1 className="display-3 fw-bold">Society Rating System</h1>
                <p className="lead mb-4">
                    Provide transparent and constructive feedback on your society’s services.
                </p>
                <Link to="/submit" className="btn btn-light btn-lg shadow-lg">
                    Submit Rating
                </Link>
            </div>
        </header>

        <section className="bg-light py-5">
            <div className="container">
                <h2 className="text-center mb-4">Key Features</h2>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <ul className="list-unstyled feature-list text-center">
                            <li>Residents can submit one rating per month</li>
                            <li>Admin can view and download reports</li>
                            <li>Dashboard for rating trends over time</li>
                            <li>Option to rate anonymously</li>
                        </ul >
                    </div >
                </div >
            </div >
        </section >

        {/* CTA */}
        < section className="py-5 text-center" >
            <div className="container">
                <h2 className="mb-3">Ready to Contribute?</h2>
                <p className="mb-4">Share your experience or explore rating trends today.</p>
                <Link to="/ratings" className="btn btn-primary btn-lg shadow">
                    View Ratings Dashboard
                </Link>
            </div>
        </section >
    </>
);

export default Home;
