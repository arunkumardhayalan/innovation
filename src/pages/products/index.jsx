import React, { useEffect, useState } from 'react';
import { Breadcrumb, Button, Skeleton } from 'antd';
import ProductCard from '../../components/product-card';
import ProductAddPopup from '../../components/product-add-popup';
import ScrollToTop from "react-scroll-to-top";
import axios from "axios";

function Products() {
    const [addPopupOpen, setAddPopupOpen] = useState(false);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const cartItem = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
    const [cartItems, setCartItems] = useState(cartItem);
    const [loadings, setLoadings] = useState([]);

    const addPopupClose = () => {
        setAddPopupOpen(false);
    }


    const showSkeleton = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };


    useEffect(() => {
        showSkeleton();
        getProduct()

    }, [cartItems])


    const strDescending = [...data].sort((a, b) =>
        a.availableQuantity > b.availableQuantity ? -1 : 1,
    );
    console.log(strDescending, "strDescending");

    async function getProduct() {
        const response = await axios.get(`https://uiexercise.onemindindia.com/api/Product`);
        // setData(response.data.slice(0, 1000));
        setData(response.data)
        console.log(response, "response")

        if (response.status == 200) {
            return response.data;
        } else {
            return { items: [] };
        }
    }





    const addToCart = (productId) => {
        alert(productId);
        const existingItemIndex = cartItems.findIndex(
            (item) => item.productId === productId
        );

        if (existingItemIndex !== -1) {
            alert('existing');
            // const updatedItems = [...cartItems];
            // updatedItems[existingItemIndex].qty += 1;
            // setCartItems(updatedItems);
            // localStorage.setItem('cartItems', JSON.stringify(updatedItems));
        } else {

            const addedItemId = data.find((el) => el.productId === productId);
            console.log(addedItemId, 'addedItemId');
            setCartItems([...cartItems, addedItemId]);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }






    };

    const addBtnFunc = () => {
        setAddPopupOpen(true)

    }

    return (
        <div className='product-page px-6'>


            <ProductAddPopup
                data={data}
                addPopupOpen={addPopupOpen}
                addPopupClose={addPopupClose}
            />


            <div className='grad-box  rounded-3xl'>
                <div className='check-net p-6 mb-3'>
                    <div className='flex justify-between'>
                        <div className='self-center'>
                            <Breadcrumb
                                className='font-bold'
                                items={[
                                    {
                                        title: 'Home',
                                    },

                                    {
                                        title: 'Products',
                                    },
                                ]}
                            />
                            <div>Showing result: <b> {data.length}</b></div>
                        </div>
                        <div className='text-3xl font-bold'>
                            Products
                        </div>
                        <div className='flex gap-5'>
                            <div className='self-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                                    <path d="M21 21l-6 -6"></path>
                                </svg>
                            </div>
                            <Button className='add-btn' onClick={() => addBtnFunc()}>Add new</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mx-auto mb-6 card-sec'>
                <div className='grid grid-cols-12 gap-6'>
                    {strDescending.map((product) => (
                        <>
                            {product.productName ?
                                <div className='col-span-3 max-lg:col-span-4 max-md:col-span-6 max-sm:col-span-6 '>
                                    <div className={product.availableQuantity == '' || null || 0 ? 'out-of-stock' : ''}>

                                        <Skeleton
                                            className='bg-white p-6 rounded-3xl'
                                            loading={loading}
                                            paragraph={{
                                                rows: 6,
                                            }}>

                                            <ProductCard
                                                productName={product.productName ? product.productName : '-'}
                                                productQty={product.availableQuantity ? product.availableQuantity : '-'}
                                                productId={product.productId}
                                                key={data.productId}
                                                addToCart={addToCart}
                                                data={data}
                                            />

                                        </Skeleton>
                                    </div>
                                </div>
                                : ""}
                        </>
                    ))}
                </div>

            </div>



            <ScrollToTop smooth color="#6f00ff" />
        </div>
    );
}

export default Products;