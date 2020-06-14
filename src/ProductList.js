import React from 'react';
import { Row } from 'react-bootstrap';
import ProductItem from './ProductItem';

const ProductList = ({ products, onAdd, cart, onDelete }) => {
  return (
    <Row>
      {
        products.map((product, index) => (
          <ProductItem 
          index={index} 
          product={product} 
          onAdd={onAdd}
          onDelete={onDelete} 
          cart={cart}
          />
        ))
      }
    </Row>
  )
}

export default ProductList;

