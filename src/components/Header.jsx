import React, {useState} from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const Header = (props) => {

  // const [button, setButton] = React.useState()


  return (
    <Container>
      <div className="text">
        <h2>Meme Generator</h2>
        <h4>with React Js</h4>        
      </div>
      <div className="imgContain">
        <img onClick={props.handleClick} src="https://e1.pxfuel.com/desktop-wallpaper/176/69/desktop-wallpaper-3d-cartoon-3d-cartoon-angry-birds-1366x768-for-your-mobile-tablet-thumbnail.jpg" alt="" />
      </div>
    </Container>
  )
}

const Container = styled.header`
  overflow: hidden;
  position: fixed;
  top: 0;
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
      animation: imageanime 500ms ease forwards infinite;
      @keyframes imageanime {
        0% {
          transform: scale(.96);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }

  .text {
    display: flex;
    gap: 10px;
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