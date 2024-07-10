import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaBars, FaWhatsapp } from 'react-icons/fa';
import './TopNavbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar fixed-top navbar-expand-sm ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <a className="navbar-brand" href="javascript:void(0)">
                    <img className="dham-logo" src="./assets/Images/LOGO-1.png" alt="LOGO" />
                </a>
                <p className='top-offer'>Login now to get upto 15% lower prices</p>
                <div className="dropdown">
                    <button type="button" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                        <FaUserCircle />&nbsp;<FaBars />
                    </button>
                    <ul className="dropdown-menu ms-auto">
                        <li><a className="dropdown-item" href="#">Sign Up</a></li>
                        <li><a className="dropdown-item" href="#">Log In</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#"><FaWhatsapp /> Support Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
