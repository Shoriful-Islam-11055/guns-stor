import React from 'react';

const Cart = ({gun}) => {
    console.log(gun.name)
    
    return (
        <div>
            <div class="card h-100">
                <img src="" alt="" class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>    
        </div>
    );
};

export default Cart;