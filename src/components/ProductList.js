// src/components/ProductList.js
import React from 'react';
import Product from './Product';
import styled from 'styled-components';

const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const products = [
  { id: 1, title: 'T-Shirt', price: 19.99, image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHNoaXJ0fGVufDB8fDB8fHww' },
  { id: 2, title: 'Jeans', price: 39.99, image: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8amVhbnN8ZW58MHx8MHx8fDA%3D' },
  { id: 3, title: 'Jacket', price: 59.99, image: 'https://media.istockphoto.com/id/505623612/photo/leather-jacket.webp?a=1&b=1&s=612x612&w=0&k=20&c=Jkvy-j6fnQzt48gF_Oi10RTZm2neWtXS3yxbeq87ICg=' },
  { id: 4, title: 'Sneakers', price: 79.99, image: 'https://images.unsplash.com/photo-1549298916-f52d724204b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNuZWFrZXJzfGVufDB8fDB8fHww' },
  { id: 5, title: 'Backpacks', price: 49.99, image: 'https://images.unsplash.com/photo-1509762774605-f07235a08f1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFja3BhY2t8ZW58MHx8MHx8fDA%3D' },
  { id: 6, title: 'Hats', price: 29.99, image: 'https://images.unsplash.com/photo-1518061124653-4b85d51931f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhhdHN8ZW58MHx8MHx8fDA%3D' },
]

const ProductList = () => {
  return (
    <ProductListContainer id="products">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;