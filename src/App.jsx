import './App.css'
import React from 'react'

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
    <>
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
    </>
  )
}


export default App
