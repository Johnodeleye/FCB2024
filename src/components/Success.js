import React from 'react'

const Success = () => {
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
  
  <img src="./hand.png" alt="hand" style={{
    width:"15%",
    marginBottom: '2%',
  }} />
  
  <h1 style={{
    lineHeight: '0%',
    fontFamily: "Barlow",
    fontWeight: '400',
  }}>
  Thank you for sharing your feedbacks!
  </h1>
  
  <p style={{
    textAlign: 'center',
    marginTop: '1%'
  }}>
  We value your insights and appreciate you taking <br></br>the time to help us improve. Your feedback has <br></br>been recorded
  </p>
      
  
      </div>
  )
}

export default Success
