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
      products: [
        { name: 'iPhone XS Max', image: 'https://images-na.ssl-images-amazon.com/images/I/51ZdmjN52-L._SY879_.jpg' },
        { name: 'iPhone 11', image: 'https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SX679_.jpg' },
        { name: 'iPhone XR', image: 'https://images-na.ssl-images-amazon.com/images/I/51YXG1bDM5L._SY879_.jpg' },
        { name: 'iPhone 11 Pro Max', image: 'https://images-na.ssl-images-amazon.com/images/I/61ers6OzvUL._SX679_.jpg' },

      ],
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
    const { cart, products } = this.state;
    return (
      <Router>
        <Container>
          <Header cart={cart} />
          <Switch>
              <Route path="/cart">
                <Cart cart={cart} />
              </Route>
              <Route path="/">
              <ProductList products={products} onAdd={this.onAdd} onDelete={this.onDelete} cart={cart} />
              </Route>
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
