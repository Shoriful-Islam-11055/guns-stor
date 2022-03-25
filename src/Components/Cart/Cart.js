import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Cart.css'
const Cart = ({gun}) => {
    // console.log(gun.name)
    const {name, img, price, action, bullet} = gun;

    const haldleAddToCart =() =>{
        console.log('AddCard')
    }
    return (
        <div className='guns-cart'>
            <div className="card Larger shadow">
                <div>
                     <img src={img} alt="" className="card-img-top card-img p-2"/>
                </div>
                <div className="card-body body-cart">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">
                    <span className='fs-4 fw-bold'>Price: {price}</span> <br />
                    Action: {action} <br />
                    Bullet: {bullet}
                    </p>
                    
                </div>
                <div className='footer-card'>
                     <button className='card-btn py-2 w-100' onClick={haldleAddToCart}><small className='me-2 fs-5 fw-bold'>Add to Card</small><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>  
                </div>
            </div>    
        </div>
    );
};

export default Cart;