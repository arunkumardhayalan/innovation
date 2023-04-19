import React from 'react';
import { NoImages } from '../../images';
import { Button } from 'antd';

function ProductCard({ addToCart, productId, productName, productQty }) {

    const addToCartFunc = () => {
        addToCart(productId);
    };

    function MyButton() {
        return (
            <div className='add-cart-btn'>
                <span className='add-card-label'>
                    <Button
                        onClick={addToCartFunc}
                    >
                        Add to cart
                    </Button>

                </span>
                <span className='out-stock-label'>
                    <Button
                        disabled
                    >
                        Out of stock
                    </Button>

                </span>

            </div>
        );
    }



    return (
        <div className='card '>
            <div className='no-image bg-white px-6 py-8 rounded-2xl rounded-b-none shadow-box'>
                <img src={NoImages} className='w-2/4 mx-auto' />
            </div>
            <div className='text-center p-4 card-content-bg'>
                <div className='text-xl font-bold truncate'>
                    {productName}
                </div>
                <div className='mb-3'>
                    Qty: {productQty}
                </div>
                <div className='add-cart-btn'>
                    <MyButton productId={productId} />
                </div>
            </div>

        </div>
    );
}

export default ProductCard;