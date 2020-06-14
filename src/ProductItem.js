import React, { useState } from 'react';
import { connect } from "react-redux";
import { Button, Col, Image, Row } from 'react-bootstrap';
import Counter from './Counter';
import { addItem, deleteItem } from './redux/actions/cartActions';


let getButton = ({product, isProductInCart, quantity, onDelete, onAdd})  => {

    if(isProductInCart) {
        return (<Button variant="danger" onClick={() => onDelete(product.name)}>Remove from Cart</Button>)
    }
    else {
        return (<Button variant="warning" onClick={() => onAdd(product.name, quantity)}>Add to Cart</Button>)
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAdd: (name, quantity) => dispatch(addItem(name, quantity)),
        onDelete : (name) => dispatch(deleteItem(name)),
    };
};

const GetButton = connect(null, mapDispatchToProps)(getButton);

const ProductItem = ({ product, cart }) => {
    
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
               <GetButton product={product} isProductInCart={isProductInCart} quantity={quantity} />
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
