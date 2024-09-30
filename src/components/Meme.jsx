import React, { createElement } from 'react'
import styled from 'styled-components'
import memesData from "../memesData"


// const url
const Meme = () => {

  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/38el31.jpg',
  })
  const [allMemeImages, setAllMemeImages] = React.useState(memesData)


  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url
    console.log(url)
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    })) //saving in state

  }
  return (
    <Main>
      <div>
        <label htmlFor='topText'>
          Top Text
          <input id='topText' type="text" placeholder='Shut up' />
        </label>
        <label>
          Bottom Text
          <input type="text" placeholder='And take my money' />
        </label>
        <button onClick={getMemeImage}>Get a new meme image  🖼</button>
        <img src={meme.randomImage} alt="" />
      </div>
    </Main>
  )
}

const Main = styled.main`
  padding: 36px;
  div {
    display: grid;
    grid-template: repeat(2, 40px) / repeat(2, 1fr);
    gap: 47px;
    justify-content: center;
    justify-items: center;

    label {
      display: grid;
      gap: 10px;
      border: none;

      input {
        border-radius: 5px;
        text-indent: 5px;
        padding: 10px;
        border: 1px solid #d5d4d8;
        &:focus {
          outline: 3.5px solid #aa18da83;
        }
      }      
    }

    button {
      grid-column: 1 / -1;
      border-radius: 5px;
      background: linear-gradient(90.41deg, #711F8D 1.14%, #A818DA 100%);
      color: white;
      border: none;
      cursor: pointer;
    }
    img {
      max-width: 100%;
      grid-column: 1 / 3;
    }
  }

`

export default Meme