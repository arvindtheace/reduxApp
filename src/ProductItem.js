import React from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import Counter from './Counter';

const ProductItem = ({ product }) => {
    return (
        <Col md={3}>
            <Row className="justify-content-center">
                <Image src={product.image} height="300px"></Image>
            </Row>
            <Row className="justify-content-center">
                <label>{product.name}</label>
            </Row>
            <Row className="justify-content-center">
                <Counter />
            </Row>
            <Row className="justify-content-center mt-2">
                <Button variant="warning">Add To Cart</Button>
            </Row>
        </Col>
    )
}

export default ProductItem;