import React from "react"
import Count from "./Count"
import styled from "styled-components"

export default function trying () {
  
  const [result, setResult] = React.useState('No')
  function handleClick() {
    setResult("Yes")
  }

  const [count, setCount] = React.useState(0)
  function add() {
    setCount(prevCount => prevCount + 1)
  }
  function subtract() {
    setCount(prevCount => prevCount - 1)
  }

  // function timeOfDay(name){
  //   const date = new Date()
  //   const hours = date.getHours()

  //   let timeOfDay
  //   if (hours >= 4 && hours < 12){
  //     timeOfDay = 'morning'
  //   } else  if (hours >= 12 && hours < 17){
  //     timeOfDay = 'afternoon'
  //   } else  if (hours >= 17 && hours < 20){
  //     timeOfDay = 'evening'
  //   } else {
  //     timeOfDay = 'night'
  //   }
  //   return `Good ${timeOfDay}, ${name}`
  // }
  // console.log(timeOfDay('bob'))
  return (
    <>
      <div className="get">
        <button onClick={subtract}>-</button>
        <div>
          <h1><Count number={count} /></h1>
        </div>
        <button onClick={add}>+</button>
      </div>
        <h1>{result}</h1>
        <button onClick={handleClick}>Button</button>      
    </>

  )

}

 