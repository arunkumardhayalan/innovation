import {  Drawer } from 'antd';
import React from 'react';
import { NoImages } from '../../images';

function MyCart({ cartClose, cartOpen }) {


    const cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];

    return (
        <Drawer title="My Cart" placement="right" onClose={cartClose} open={cartOpen}>

            <div className="columns is-multiline">
                {cartItems && cartItems.map((item, index) => (
                    <div className='mb-6'>
                        <div key={item.productId} className='flex gap-3 mb-3'>
                            <div className='cart-img self-center'>
                                <img src={NoImages} className='' />
                            </div>
                            <div>
                                <span className='text-lg font-bold'> {item.productName}</span><br />
                                <span className='truncate text-sm'>{item.productId}</span>
                            </div>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>

        </Drawer>
    );
}

export default MyCart;