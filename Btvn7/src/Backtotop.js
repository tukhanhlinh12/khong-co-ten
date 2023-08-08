import React, { useState, useEffect } from 'react';
import './Backtotop.css';

const Backtotop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const handleBacktotop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={`back-to-top-button ${isVisible ? 'visible' : ''}`}
            onClick={handleBacktotop}>
            <span className="arrow-up"></span>
        </div>
    );
};

export default Backtotop;
