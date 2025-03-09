// src/App.js
import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <ProductList />
    </>
  );
};

export default App;