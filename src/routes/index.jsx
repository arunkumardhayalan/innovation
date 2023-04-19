import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Products from '../pages/products';

function MyRoutes(props) {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Products />} />
            </Routes>
        </div>
    );
}

export default MyRoutes;