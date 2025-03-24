import React, { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkLocalStorage } from './redux/makeupSlice';
import { AppDispatch } from './redux/store';

import './App.css';

const Products = React.lazy(() => import('./pages/Products'));
const ProductDetails = React.lazy(() => import('./pages/ProductDetails'));
const CreateProduct = React.lazy(() => import('./pages/CreateProduct'));

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(checkLocalStorage());
  }, [dispatch]);

  return (
    
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/create-product" element={<CreateProduct />} />
        </Routes>
      </Suspense>
   
  );
}

export default App;