import React, { useState } from 'react';
import { ShopLogo } from '../../images';
import { Menu } from 'antd';
import MyCart from '../my-cart';

function MainHeader() {
    const cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];

    const items = [
        {
            label: 'Home',
            key: 'home',
        },
        {
            label: 'Product',
            key: 'product',
        },
        {
            label: 'Contact',
            key: 'contact',
        },
    ];

    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };


    const [cartOpen, setCartOpen] = useState(false);

    const showDrawer = () => {

        setCartOpen(true);
    };

    const cartClose = () => {
        setCartOpen(false);
    };

    return (
        <>
            <div className='flex justify-between py-4 px-6 main-header'>
                <div>
                    <img src={ShopLogo} className='logo' />
                </div>
                <div className='flex-auto text-center self-center'>
                    <Menu onClick={onClick} selectedKeys={'product'} mode="horizontal" items={items} />
                </div>
                <div className='flex gap-6 '>
                    <div className='text-base flex gap-1 self-center'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                            </svg>
                        </div>
                        <div className='font-semibold'>Chennai</div>
                    </div>
                    <div className='self-center'>
                        <svg onClick={showDrawer} xmlns="http://www.w3.org/2000/svg" className="cursor-pointer icon icon-tabler icon-tabler-shopping-bag" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"></path>
                            <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
                        </svg>
                        <div className='cart-count'>{cartItems.length}</div>
                    </div>
                </div>
            </div>
            <MyCart cartClose={cartClose} cartOpen={cartOpen} />
        </>
    );
}

export default MainHeader;