import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './GunsCart.css'

const GunsCart = () => {
    const [guns, setGuns] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setGuns(data));
        
    },[])
    return (
        <div className='mt-3'>
             <h2 className='text-center mb-3 text-decoration-underline text-success'>Our Guns</h2>
            <div className="gunsCard-container container">
                {
                guns.map(gun => <Cart key={gun.id} gun={gun}></Cart> )
                }
            </div>
        </div>
    );
};

export default GunsCart;