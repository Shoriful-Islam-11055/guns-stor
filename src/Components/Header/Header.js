import React from 'react';
import icon from "../images/gunlogo.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = () => {
    return (
        <div className='fixed-top'>
            <nav className="navbar navbar-dark bg-dark py-3">
                <div className="container-fluid">
                    <div>
                         <a className="navbar-brand" href="#">
                        <img src={icon} alt="" width="40" height="29" className="d-inline-block align-text-top me-3 ms-5 rounded"/>
                            <span className='fs-4 fw-bold'>Guns Stor</span>
                        </a>
                    </div>
                    <div>
                        <ul class="navbar-nav me-5">
                            <li className="nav-item">
                            <div className='countBtn'>
                                <button type="button" className="btn btn-dark position-relative"><FontAwesomeIcon className='fs-4' icon={faShoppingCart}></FontAwesomeIcon>
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            0+
                                        <span className="visually-hidden">unread messages</span>
                                        </span>
                                </button>
                            </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;