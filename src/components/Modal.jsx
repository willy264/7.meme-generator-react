import React from 'react'
import styled from 'styled-components'


const Modal = (props) => {

  return (

      <Pop className="modal">
        <div className="card">
          <span className="material-icons" style={{fontVariationSettings: "'FILL' 0, 'wght' 100, 'GRAD' 200, 'opsz' 24"}} onClick={props.handleClick}>close</span>
          <div className='image'>
            <img src="public/images/3d cartoon wallpapers hd 3d cartoon wallpapers hd angry birds-removebg-preview.png" alt="" />
          </div>
          <div className='text'>
            <h3>Welcome</h3>
            <p>Meme Generator</p>
            <span>Start building your own meme</span>
          </div>
        </div>          
      </Pop>              

  )
}

const Pop = styled.header`
  position: fixed;
  inset: 0;
  background-color: hsla(5, 90%, 4%, .2);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  display: grid;
  justify-content: center;
  place-items: center;
  padding: 2rem 1.5rem;
  transition: opacity .4s, visibility .4s;
  color: black;
  z-index: 12;
  animation: popup 500ms ease forwards 1;
    @keyframes popup {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
  

  .card {
    position: relative;
    width: fit-content;
    background-color: #ffefd3;
    padding: 3rem 1.25rem 2rem;
    display: grid;
    row-gap: 1.5rem;
    text-align: center;
    animation: animate 1s ease forwards 1;
    @keyframes animate {
      0% {
        transform: rotateX(90deg);
      }
      100% {
        transform: rotateX(0);
      }
    }

    .material-icons {
      z-index: 11;
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      font-size: 2rem;
      font-weight: 900;
      background: linear-gradient(
        to top, 
        #000000a1 0%, 
        #ff8800 50%,
        #000000 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      cursor: pointer;

      &:active {
        scale: .9;
      }
    }
    .image {
      justify-self: center;
      
      img {
        object-fit: cover;
        width: 100%;
        justify-self: center;
        transition: transform .3s;
        filter: drop-shadow(0 8px 16px hsla(5, 90%, 4%, .2));
        &:hover {
          transform: scale(1.1);
        }
      }        
    }
    .text {
      font-size: 20px;

      h3, p {
        margin: 0;
        padding: 0;
      }
      h3 {
        font-size: 25px;
      }
      p {
        color: #787777;
      }
      span {
        font-size: 15px;
        background: linear-gradient(
        to top, 
        #000000a1 0%, 
        #ff8800 50%,
        #000000 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }


  }

`
    // <Main style={{display: `${props.show}`}}>
    //   <div className="card">
    //     <span className="material-icons" style={{fontVariationSettings: "'FILL' 0, 'wght' 100, 'GRAD' 200, 'opsz' 24"}} >close</span>
    //     <div className='image'>
    //       <img src="src/assets/3d cartoon wallpapers hd 3d cartoon wallpapers hd angry birds-removebg-preview.png" alt="" />
    //     </div> 
    //     <div className='text'>
    //       <h3>Welcome</h3>
    //       <p>Meme Generator</p>
    //       <span>Start building your own meme</span>
    //     </div>
    //   </div>          
    // </Main>

export default Modal
