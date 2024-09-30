import React, {useState} from 'react';
import styled from 'styled-components';

const Header = (props) => {

  const [button, setButton] = React.useState()

  function handleClick() {
    console.log('i was click')

  }

  return (
    <Container>
      <div className="imgContain">
        <img onClick={handleClick} src="src/assets/3d cartoon wallpapers hd 3d cartoon wallpapers hd angry birds.jpg" alt="" />
      </div>
      <div className="text">
        <h2>Meme Generator</h2>
        <h4>React Js</h4>        
      </div>

    </Container>
  )
}

const Container = styled.header`
  overflow: hidden;
  position: fixed;
  z-index: 11;
  backdrop-filter: blur(30px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 100px;
  background: transparent;
  padding: 50px;

  .imgContain {
    img {
      border-radius: 50%;
      height: 50px;
      width: 50px;
      object-fit: cover;
      background: linear-gradient(#000 0 0) padding-box, linear-gradient(to right, orange, #ff4800) border-box;
      border: 3px solid transparent;
      cursor: pointer;
      
      &:hover {
        transform: scale(1.2);
      }
      &:active {
      transform: scale(.95);
    }
    }
  }

  .text {
    display: flex;
    gap: 50px;
    align-items: center;
    h2 {
      font-size: 1.25rem;
    }
    h4 {
      font-size: .75rem;
      font-weight: 500;
    }    
  }

`


export default Header