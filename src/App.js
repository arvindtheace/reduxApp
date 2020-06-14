import React from 'react';
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

const App = () => {
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

export default App;
