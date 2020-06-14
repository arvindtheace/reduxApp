import React from 'react';
import { connect } from "react-redux";
import { Form, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
const getCartIcon = (count) => {
    if (!count) {
        return (<i className="fa fa-shopping-cart"></i>)
    }
    else {
        return (<span className="fa-stack has-badge" data-count={count}>
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-shopping-cart fa-stack-1x"></i>
        </span>)
    }
}
const Header = ({ cart }) => {
    let count = cart.length;
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand><Link to="/">iPhone Store</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form inline>
                    <Link to="/cart">{getCartIcon(count)}</Link>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}
const mapStateToProps = state => {
    return {
        cart: state.cart,
    };
};

export default connect(
    mapStateToProps
)(Header);