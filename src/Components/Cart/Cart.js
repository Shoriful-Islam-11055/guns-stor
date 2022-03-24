import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Cart.css'
const Cart = ({gun}) => {
    // console.log(gun.name)
    const {name, img, price, action, bullet} = gun;
    return (
        <div className='guns-cart'>
            <div className="card Larger shadow">
                <img src={img} alt="" className="card-img-top card-img"/>
                <div className="card-body body-cart">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                    Price: {price} <br />
                    Action: {action} <br />
                    Bullet: {bullet}
                    </p>
                    
                </div>
                <div className='footer-card'>
                     <button className='card-btn py-2 w-100'><small className='me-2 fs-5 fw-bold'>Add to Card</small><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>  
                </div>
            </div>    
        </div>
    );
};

export default Cart;