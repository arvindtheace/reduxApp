import React from 'react';
import { Col, Row } from 'react-bootstrap';
const Cart = ({ cart }) => {
    if(cart.length === 0) return (<h2>Cart is empty</h2>);
    return (
        <Col>
            {cart.map(item => (
                <Row className="align-items-center">
                    <Col md={3} >
                        <label>{item.name} : {item.quantity} </label>
                    </Col>
                </Row>
            ))}
        </Col>
    )
}

export default Cart;