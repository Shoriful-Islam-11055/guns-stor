import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './GunsCart.css'

const GunsCart = () => {
    const [guns, setGuns] = useState([]);
    
    const haldleAddToCart =(id) =>{
        console.log(id)
    }

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
        .then(res => res.json())
        .then(data => setGuns(data));
        
    },[])
    return (
        <div className='gunsCard'>
             <h2 className='text-center mb-3 text-decoration-underline text-success'>Our Guns</h2>
            <div className="gunsCard-container container">
                {
                guns.map(gun => <Cart key={gun.id} gun={gun} haldleAddToCart={haldleAddToCart}></Cart> )
                }
            </div>
        </div>
    );
};

export default GunsCart;