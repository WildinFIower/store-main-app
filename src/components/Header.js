// src/components/Header.js
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #282c34;
  color: white;
`;

const Title = styled.h1`
  font-size: 30px;
`;

const Nav = styled.nav`
  a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>MillionMax</Title>
      <Nav>
        <a href="#products">Products</a>
        <a href="#cart">Cart</a>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;