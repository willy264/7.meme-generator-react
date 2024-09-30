import React from 'react'

const Count = (props) => {

  let starIcon = props.isFilled ? 'Group 1.png' : 'Troll-Face.png'

  return (
    <>
      <div>{props.number}</div>

      <img 
        src={`src/assets/${starIcon}`} 
        className="card--favorite"
        onClick={props.handleClick}
      />
    </>
  )
}

export default Count