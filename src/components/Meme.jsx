import React, { createElement } from 'react'
import styled from 'styled-components'
import memesData from "../memesData"


// const url
const Meme = () => {

  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/3po4m7.jpg',
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
      <div className="formInput">
          <label htmlFor='url'>
            Image URL
          </label> 
          <input 
            style={{pointerEvents: 'none'}}
            type="text"
            name="url"
            value={meme.randomImage}
          />          
        </div>
        <div className="formInput">
          <label htmlFor='topText'>
            Top Text
            {/* <input id='topText' type="text" placeholder='Shut up' /> */}
          </label>
          <input 
            type="text"
            placeholder="Top text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />          
        </div>
        <div className="formInput">
          <label>
            Bottom Text
            {/* <input type="text" placeholder='And take my money' /> */}
          </label> 
          <input 
            type="text"
            placeholder="Bottom text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />          
        </div>

        <div className="clickBut">
          <button onClick={getMemeImage}>Get a new meme image  🖼</button>
        </div>
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
  margin: 100px;
  background-color: antiquewhite;
  border-radius: 50px;
  display: grid;
  grid-template-columns: .7fr 1fr;
  gap: 50px;

`
const Form = styled.div`
  display: grid;
  grid-template-rows: repeat(4, .1fr);
  gap: 30px;

  .formInput {
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
      letter-spacing: 2px;
      font-weight: 700;  
      margin-left: 20px;
    }
    input {
      width: 100%;
      border-radius: 5px;
      text-indent: 5px;
      padding: 15px;
      letter-spacing: 2px;
      font-weight: 500;
      font-size: 15px;
      border: 1px solid #d5d4d8;
      box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.077);

      &:focus {
        outline: 3.5px solid #aa18da83;
      }
    }        
  }


  button {
    background: linear-gradient(#000000 0 0) padding-box, 
      linear-gradient(
        to right,       
        #000000bb 0%, 
        #ff8800 50%,
        #000000ce 100%) border-box;
    border: 3px solid transparent;
    color: white;
    box-shadow: 0px 0px 30px -10px #707070;
    padding: 15px 25px;
    letter-spacing: 2px;
    font-weight: 500;
    font-size: 15px;
    border-radius: 7px;
    cursor: pointer;

    &:active {
      transform: scale(.95);
    }
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