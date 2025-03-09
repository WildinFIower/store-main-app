// src/components/Product.js
import styled from 'styled-components';

const ProductContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  background-color: white;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProductTitle = styled.h2`
  font-size: 18px;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  color: #28a745;
`;

const Product = ({ product }) => {
  return (
    <ProductContainer>
      <ProductImage src={product.image} alt={product.title} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>${product.price}</ProductPrice>
      <button>Add to Cart</button>
    </ProductContainer>
  );
};

export default Product;