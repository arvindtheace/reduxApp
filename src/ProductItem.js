import React, { useState } from 'react';
import { connect } from "react-redux";
import { Button, Col, Image, Row } from 'react-bootstrap';
import Counter from './Counter';

const getButton = (product, isProductInCart, quantity, onAdd, onDelete)  => {
    if(isProductInCart) {
        return (<Button variant="danger" onClick={() => onDelete(product)}>Remove from Cart</Button>)
    }
    else {
        return (<Button variant="warning" onClick={() => onAdd(product, quantity)}>Add to Cart</Button>)
    }
}

const ProductItem = ({ product, onAdd, onDelete, cart }) => {
    
    const isProductInCart = cart.find(item => item.name === product.name);
    let qty = 0;
    if(isProductInCart) {
        qty = isProductInCart.quantity;
    }
    const [quantity, changeQty] = useState(qty);
    return (
        <Col md={3}>
            <Row className="justify-content-center">
                <Image src={product.image} height="300px"></Image>
            </Row>
            <Row className="justify-content-center">
                <label>{product.name}</label>
            </Row>
            <Row className="justify-content-center">
                <Counter onChange={(qty) => changeQty(qty)} count={quantity}/>
            </Row>
            <Row className="justify-content-center mt-2">
               {getButton(product, isProductInCart, quantity, onAdd, onDelete)}
            </Row>
        </Col>
    )
}

const mapStateToProps = state => {
    return {
      cart: state.cart,
    };
  };
  
export default connect(
    mapStateToProps
  )(ProductItem);
