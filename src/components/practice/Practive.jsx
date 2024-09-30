import React from 'react';
import { useState } from 'react';
import Count from './Count';
import boxes from './boxes'
import styled from 'styled-components'
import Box from './Box';


const Practive = () => {

// USING ARRAYS IN STATE
  // const [thingsElements, setThingsElements] = React.useState(['thing 1', 'thing 2'])
  // const addItem = () => {
  //   // const newthing = `thing ${thingsArray.length + 1}`
  //   // thingsArray.push(newthing)
  //   // console.log(thingsArray)
  //   // return thingsArray
  //   setThingsElements(prevState => [...prevState, `thing ${prevState.length + 1}`])
  // }
  // const mappedArray = thingsElements.map(things => <p key={things}>{things}</p>)


// USING OBJECTS IN STATE
  // const [contact, setContact] = React.useState({
  //   firstName: "John",
  //   lastName: "Doe",
  //   phone: "+1 (719) 555-1212",
  //   email: "itsmyrealname@example.com",
  //   isFavorite: true
  // })

  // function toggleFavorite() {
  //   console.log("Toggle Favorite")
  //     setContact(prevContact => ({
  //       ...prevContact,
  //       isFavorite: !prevContact.isFavorite
  //     })
  //   )
  // }


// BOXES
  const [boxed, setBoxed] = React.useState(boxes)

  const mappedBoxes = boxed.map(box => (
    <Box 
      key={box.id} 
      on={box.on} 
      //2. toggle={toggle}
      toggle={() => toggle(box.id)}
      //2. id={box.id}
    />
  ))

  function toggle(id) {
  // 2, 3
    setBoxed(prevBox => {
      return prevBox.map((box) => {
        return box.id === id ? {...box, on: !box.on} : box
      })

  // OR 

      // const newBox = []
      // for (let i = 0; i < prevBox.length; i++) {
      //   const currentBox = prevBox[i]
      //   if(currentBox.id === id) {
      //     const updatedBox = {
      //       ...currentBox,
      //       on: !currentBox.on
      //     }
      //     newBox.push(updatedBox)
      //   } else {
      //     newBox.push(currentBox)
      //   }
      // }
      // return newBox
    })
  }

  return (

    <>
    {/* USING ARRAYS IN STATE */}
      {/* <button onClick={addItem}>Added</button>
      <p>{mappedArray}</p> */}


    {/* USING OBJECTS IN STATE */}
    {/* <main>
      <article className="card">
        <img src={`src/assets/Troll-Face.png`} className="card--image" />
        <div className="card--info">
          <Count isFilled={contact.isFavorite} handleClick={toggleFavorite} />
          <h2 className="card--name">
            {contact.firstName}{contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main> */}

      {mappedBoxes}


    </>

  )
}

export default Practive