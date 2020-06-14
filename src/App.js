import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import ProductList from './ProductList';
import Header from './Header';
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

      ]
    }
  }
  render() {
    const { products } = this.state;
    return (
      <Container>
        <Header/>
        <ProductList products={products} />
      </Container>
    );
  }
}

export default App;
