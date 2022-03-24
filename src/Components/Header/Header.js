import React from 'react';
import icon from "../images/gunlogo.jpg"

const Header = () => {
    return (
        <div className='fixed-top'>
           <nav className="navbar navbar-dark bg-dark py-3">
                <div className="container-fluid ">
                    <a className="navbar-brand" href="#">
                       <img src={icon} alt="" width="40" height="29" className="d-inline-block align-text-top me-3 ms-5 rounded"/>
                        <span className='fs-4 fw-bold'>Guns Stor</span>
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Header;