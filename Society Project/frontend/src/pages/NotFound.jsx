import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="error-container">
            <div className="lottie-animation">
                <Player
                    autoplay
                    loop
                    src="https://lottie.host/d987597c-7676-4424-8817-7fca6dc1a33e/BVrFXsaeui.json"
                    style={{ height: '300px', width: '300px' }}
                />
            </div>
            <div className="error-content">
                <h1>Error!</h1>
                <p>Oops! Product Not Found :(</p>
                <Link to="/" className="btn btn-primary">
                    Go Back!
                </Link>
            </div>
        </div>
    );
};

export default NotFound;