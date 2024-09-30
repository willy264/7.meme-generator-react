import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <img src="src/assets/Troll-Face.png" alt="" />
      <h2>Header</h2>
      <h4>React Course </h4>
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  align-items: center;
  height: 65px;
  background: linear-gradient(90deg, #672280 1.18%, #A626D3 100%);
  color: white;
  padding: 20px;

  img {
    height: 100%;
    margin-right: 6px;
  }
  h2 {
    font-size: 1.25rem;
    margin-right: auto;
  }
  h4 {
    font-size: .75rem;
    font-weight: 500;
  }
`


export default Header