
import React from 'react'
import { Link } from 'react-router-dom'

const Feedback = () => {
  return (
    
    <div style={{
        backgroundColor: '#1C1C1C',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        marginTop: '-5%',
      }}> 
      <div>
        <img src="./hack.png" alt="hack" style={{
          width:"25%",
          marginLeft: '10%',
          backgroundColor: 'white',
          display: 'flex',
          
        }}/>
      </div>
  
      <div style={{
        position: 'absolute',
        paddingLeft: '15%',
      }}>
        <h2>
          Share Anonymously
        </h2>
  
        <form style={{
          lineHeight: '190%',
        }}>
          <label for="thoughts" style={{
            fontSize: '10px',
          }}> Share your thoughts</label><br></br>
          <input type="text" name="thoughts" id="thoughts" class="form-input" placeholder="Hi, I'd suggest that....." style={{
            padding: '3%',
            width: '164%',
            backgroundColor: '#1C1C1C',
            border: '0px, 0px, 0px, 0px,',
          }}></input>
  <br></br>
  <div style={{
    border: '1px, solid',
    padding: '5%',
    width: '160%',
    marginTop: '5%',
  }}>
          <label for="attach" style={{
            marginBottom: '0%',
          }}>Attach file <br></br>
          <span style={{
            fontSize: '10px',
            color: 'white',
            marginTop: '0%',
            lineHeight: '0%',
          }}>File format: JPEG/PNG, MP3/WAV/AAC, MP4</span>
            </label> <br></br>
          <input type="file" name="attach" id="attach" class="form-input" style={{
            width: '80%',
            height: '140%',
            backgroundColor: '#1C1C1C',
          }} >
  
          </input>
  
          </div>
          <br></br>

        <Link to="/success"  style={{color: '#1C1C1C',float: 'right', padding: '3%', marginTop: '0%', textDecoration: "none", backgroundColor: 'white', width: "25%",height:"5%",borderRadius:"5%",textDecoration: "none",textAlign: 'center'}}> Send</Link>     

        </form>
  
      </div>
    </div>
  )
}

export default Feedback
