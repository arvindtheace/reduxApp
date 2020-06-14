import React from 'react';
import { Row } from 'react-bootstrap';
import ProductItem from './ProductItem';
import { connect } from "react-redux";

const ProductList = ({ products, onAdd, onDelete }) => {
  return (
    <Row>
      {
        products.map((product, index) => (
          <ProductItem
            key={index}
            product={product}
            onAdd={onAdd}
            onDelete={onDelete}
          />
        ))
      }
    </Row>
  )
}
const mapStateToProps = state => {
  return {
    products: state.products,
  };
};

export default connect(
  mapStateToProps
)(ProductList);

