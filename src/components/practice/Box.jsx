import React from 'react'
import styled from 'styled-components'

const Box = (props) => {

  //1. const [boxState, setBoxState] = React.useState(props.on) 

  const styles = {
    backgroundColor: props.on ? '#222222' : 'transparent'
  }
  //1. function handleClick() {
  //   setBoxState(prevOn => !prevOn)
  // }

  return (
    <Boxcontainer 
      style={styles}
      //2. onClick={() => props.toggle(props.id)} // passing a function through props with a parameter
      // 3.
      onClick={props.toggle} // passing a function through props with a parameter

    ></Boxcontainer>
     
    //1.  <Boxcontainer style={styles} onClick={handleClick}></Boxcontainer>
  )
}

const Boxcontainer = styled.div`
  display: inline-block;
  margin: 5px;
  border-radius: 10px;
  width: 100px;
  height: 100px;
  border: 2px solid blue;
`

export default Box

// import React from "react"
// import boxes from "./boxes"
// import Box from './Box';


// export default function App() {
//     const [squares, setSquares] = React.useState(boxes)
    
//     const squareElements = squares.map(square => (
//         <div key={square.id} on={square.on}></div>
//     ))
//     /**
//      * Challenge part 2:
//      * 1. Create a separate component called "Box" and
//      *    replace the `div` above with our <Box /> components
//      * 2. Pass the Box component a prop called `on` with the
//      *    value of the same name from the `boxes` objects
//      * 3. In the Box component, apply dynamic styles to determine
//      *    the backgroundColor of the box. If it's `on`, set the
//      *    backgroundColor to "#222222". If off, set it to "none"
//      */
    
//     return (
//         <main>
//             {squareElements}
//         </main>
//     )
// }

// import React from 'react'

// const Box = (props) => {

  // const styles = {
  //   backgroundColor: props.on ? '#222222' : '#cccccc',
  //   display: 'inline-block',
  //   margin: '5px',
  //   borderRadius: '10px',
  //   width: '100px',
  //   height: '100px',
  //   border: '2px solid blue',
  // }

//   return (
//     <div style={styles}></div>
//   )
// }




// export default Box