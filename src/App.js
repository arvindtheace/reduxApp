import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProductList from './ProductList';
import Header from './Header';
import Cart from './Cart';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: []
    }
  }
  onAdd = (product, quantity) => {
    const { cart } = this.state;
    cart.push({ name: product.name, quantity });
    this.setState({ cart });
  }

  onDelete = (product) => {
    const { cart } = this.state;
    cart.splice(cart.findIndex(p => p.name === product.name), 1);
    this.setState({ cart });
  }

  render() {
    return (
      <Router>
        <Container>
          <Header />
          <Switch>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/">
              <ProductList />
            </Route>
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
