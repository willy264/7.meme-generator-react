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

  // const [allMemes, setAllMemes] = React.useState(memesData)
  const [allMemes, setAllMemes] = React.useState([])
  
  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setAllMemes(data.data.memes)
    }
    getMemes()
  }, [])

  function getMemeImage() {
    // const memesArray = allMemes.data.memes;
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url
    console.log(url)
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    })) //saving in state
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
}

  return (
    <Main>
      <Form>
        <label htmlFor='topText'>
          Top Text
          {/* <input id='topText' type="text" placeholder='Shut up' /> */}
          <input 
            type="text"
            placeholder="Top text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
        </label>
        <label>
          Bottom Text
          {/* <input type="text" placeholder='And take my money' /> */}
          <input 
            type="text"
            placeholder="Bottom text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </label>
        <button onClick={getMemeImage}>Get a new meme image  🖼</button>
      </Form>
      <Memecontent>
        <img src={meme.randomImage} alt="" />          
        <h2 className="top">{meme.topText}</h2>
        <h2 className="bottom">{meme.bottomText}</h2>
      </Memecontent>
    </Main>
  )
}

const Main = styled.main`
  padding: 36px;
`
const Form = styled.div`
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
`
const Memecontent = styled.div`
  position: relative;

  img {
    max-width: 100%;
    border-radius: 3px;
  }
  h2 {
    position: absolute;
    width: 80%;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    margin: 15px 0;
    padding: 0 5px;
    font-family: impact, sans-serif;
    font-size: 2em;
    text-transform: uppercase;
    color: white;
    letter-spacing: 1px;
    text-shadow:
        2px 2px 0 #000,
        -2px -2px 0 #000,
        2px -2px 0 #000,
        -2px 2px 0 #000,
        0 2px 0 #000,
        2px 0 0 #000,
        0 -2px 0 #000,
        -2px 0 0 #000,
        2px 2px 5px #000;
  }
  .top {
    top: 0;
  }
  .bottom {
    bottom: 0;
  }

`

export default Meme