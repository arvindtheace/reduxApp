var initialState = [
    { name: 'iPhone XS Max', image: 'https://images-na.ssl-images-amazon.com/images/I/51ZdmjN52-L._SY879_.jpg' },
    { name: 'iPhone 11', image: 'https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SX679_.jpg' },
    { name: 'iPhone XR', image: 'https://images-na.ssl-images-amazon.com/images/I/51YXG1bDM5L._SY879_.jpg' },
    { name: 'iPhone 11 Pro Max', image: 'https://images-na.ssl-images-amazon.com/images/I/61ers6OzvUL._SX679_.jpg' },

  ]

  export default function(state = initialState, action) {
    switch (action.type) {
      default:
        return state;
    }
  }