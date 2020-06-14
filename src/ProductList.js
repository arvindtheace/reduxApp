import React from 'react';
import { Row } from 'react-bootstrap';
import ProductItem from './ProductItem';

const ProductList = ({products}) => {
    return (
        <Row>
        {
          products.map(product => (
            <ProductItem product={product}/>
          ))
        }
      </Row>
    )
}

export default ProductList;

