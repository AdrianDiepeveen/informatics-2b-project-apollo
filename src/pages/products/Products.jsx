import React from 'react';

import { Footer, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const Products = () => {
  const products = [
    {
      id: 1,
      brand: 'Garmin',
      model: 'Forerunner 945',
      price: 499.99,
    },
    {
      id: 2,
      brand: 'Whoop',
      model: 'Strap 4.0',
      price: 30.0,
    },
    {
      id: 3,
      brand: 'Fitbit',
      model: 'Charge 5',
      price: 149.95,
    },
  ];

  return (
    <div className="fitness-products-container">
      <h2>Fitness Tracker Products</h2>
      <div className="products-list">
        {products.map(product => (
          <div className="product" key={product.id}>
            <h3>{product.brand} - {product.model}</h3>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
