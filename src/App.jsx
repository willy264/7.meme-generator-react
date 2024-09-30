import './App.css'
import React from 'react'
import styled from 'styled-components'

import Header from './components/Header'
import Meme from './components/Meme'
import Modal from './components/Modal'
import Practive from './components/practice/Practive'
import Timed from './components/practice/Timed'

function App() {
  
  const [showModal, setShowModal] = React.useState(true)

  function toggleModal () {
    setShowModal(!showModal)
  }

  return (
    <Main>
        {/*1. <button onClick={toggleModal}>Modal</button> */}
        {/*1.  <div>{showModal ? <Modal show={'grid'} /> : <Modal show={'none'} /> }</div> */}
        {/* <Modal handleClick={toggleModal} /> */}
        {showModal && ( 
          <div className="popup">
            <Modal handleClick={toggleModal}/>
          </div>
        )}
        <Header handleClick={toggleModal} />
        <Meme />
        {/* <Practive /> */}
        {/* <Timed /> */}        
    </Main>
  )
}

const Main = styled.body`
  font-family: 'Montserrat', cursive;
  overflow: hidden;
  background-color: black;
  color: white;

  .popup {

    /* .modal {
      position: fixed;
      inset: 0;
      background-color: hsla(5, 90%, 4%, .2);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      display: grid;
      justify-content: center;
      place-items: center;
      padding: 2rem 1.5rem;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: opacity .4s, visibility .4s;
      color: black;
      z-index: 12;

      .card {
        position: relative;
        width: fit-content;
        background-color: #ffefd3;
        padding: 3rem 1.25rem 2rem;
        display: grid;
        row-gap: 1.5rem;
        text-align: center;
        transform: rotateX(90deg);
        transition: transform .6s;

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
    } */

  }
`

export default App
