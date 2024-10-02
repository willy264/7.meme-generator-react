import React, { useRef, useState }  from 'react'
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

    // const canvasRef = useRef(null);
    // const [memeImage, setMemeImage] = React.useState(null)

    // const handleDownload = () => {
    //   const canvas = canvasRef.current;
    //   const dataURL = canvas.toDataURL(meme.randomImage);
    //   setMemeImage(dataURL);
  
    //   // Create a temporary anchor element for download
    //   const downloadLink = document.createElement('a');
    //   downloadLink.href = dataURL;
    //   downloadLink.download   = meme.randomImage; // Set a default download filename
    //   downloadLink.style.display = 'none'; // Hide the element visually
  
    //   document.body.appendChild(downloadLink);
    //   downloadLink.click();
    //   document.body.removeChild(downloadLink);
    // };
  const [fonts, setFonts] = React.useState(["Cursive", "Fantasy", "Monospace", "Arial", "Serif", "San-Serif"])
  
  const [selectedFont, setSelectedFont] = useState(null)
  const mapped = (fonts.map((font, index) => 
    <button 
      key={index} 
      onClick={
        () => {
          const num = mapped[index].props.children
          setSelectedFont(num)
        }
      }
    >{font}</button>))

    const styles = {
      fontFamily: selectedFont ? selectedFont : "Monospace"
    }


  return (
    <Main>
      <Form>
        <div className="formInput">
          <label htmlFor='url'>
            Image URL
          </label> 
          <input 
            type="text"
            name="url"
            readOnly
            value={meme.randomImage}
          />          
        </div>
        <div className="editText">
          <h3>Edit Meme</h3>
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
          {/* <div className="formFonts">
            <input list="fonts" id="myfonts" name="myfonts" placeholder='Choose Fonts' />
            <datalist id="fonts">
              <option value="Cursive"></option>
              <option value="Fantasy"></option>
              <option value="Monospace"></option>
              <option value="Times"></option>
              <option value="Arial"></option>
              <option value="Serif"></option>
              <option value="San-Serif"></option>
            </datalist>                 
          </div> */}

        </div>
        <fieldset className='fonts'>
          <legend>Choose your desired font</legend>
          <div>{mapped}</div>          
        </fieldset>
        <div className="clickBut">
          <button onClick={getMemeImage}>Get a new meme image  🖼</button>
        </div>
      </Form>
      <Memecontent>
        <img src={meme.randomImage} alt="" />          
        <h2 className="top" style={styles}>{meme.topText}</h2>
        <h2 className="bottom" style={styles}>{meme.bottomText}</h2>
      </Memecontent>
      {/* <Imagedownload>
        <canvas ref={canvasRef} width={300} height={300} style={{ backgroundColor: 'blue' }}></canvas>
        <button onClick={handleDownload}>Download Meme</button>
        {memeImage && <img src={memeImage} alt="Downloaded Meme Preview" />}
      </Imagedownload> */}
    </Main>
  )
}
const Main = styled.main`
  padding: 36px;
  margin: 100px;
  background-color: antiquewhite;
  border-radius: 30px;
  display: grid;
  grid-template-columns: .7fr 1fr;
  gap: 50px;

  @media (max-width: 1800px) {
    grid-template-columns: 1fr;
  }
  @media (max-width:1800px) {
    background-color: transparent;
    padding: 36px 0;
    margin: 100px 30px;
  }
  @media (max-width: 600px) {
    margin: 100px 0;
  }

`
const Form = styled.div`
  display: grid;
  grid-template-rows: repeat(4, .1fr);
  gap: 30px;
  margin: 0 150px;

  @media (max-width: 1800px) {
    background-color: antiquewhite;
    padding: 36px;
    border-radius: 30px;
  }
  @media (max-width: 1000px) {
    margin: 0;
  }
  .fonts {
    display: grid;
    div {
      display: grid;
      gap: 10px;
      grid-template-rows: repeat(2, 1fr);
      grid-template-columns: repeat(3, 1fr);
    
      button {
        font-size: 12px;
        padding: 10px;
      }
      @media (max-width: 500px) {
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(2, 1fr);
      }
    }


  }

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

  .editText {
    display: flex;
    flex-direction: column;
    gap: 20px;

    h3 {
      letter-spacing: 2px;
      font-weight: 700;  
      font-size: 20px;
      text-align: center;
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
  }
`
const Memecontent = styled.div`
  position: relative;
  justify-self: center;

  img {
    min-width: 100%;
    border-radius: 3px;

    @media (max-width: 800px) {
      
    }
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
// const Imagedownload = styled.div`
  
// `


export default Meme
