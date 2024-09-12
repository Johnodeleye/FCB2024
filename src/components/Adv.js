import React from 'react'

const Adv = () => {
  return (
    <div style={{
        backgroundColor: "#1C1C1C",  
        display: "flex", flexDirection: "row-reverse", 
        width: '100vw', gap: 55,
    }}>
        <div style={{ paddingRight: '4%',
          width: '50%'
 }}>
        <img src= "./banner 2.png" alt="trt" width='100%'/>

        </div>
        <div  style= {{
        paddingBlock: "4%",}}>
            <p style= {{
              color: "#F5F5F5", fontSize: 25,
              textAlign: "left",
                    fontWeight: "normal",
                    fontFamily: "Poppins",
            }}> Our strategic and deliberate impact sets<br/>the foundation for success. Embark on<br/>your tech journey with us.</p>
            <button style={{
                    backgroundColor: "#F5F5F5",
                    color: "#1C1C1C",
                    borderRadius: 8,
                    width: "30%",
                    height: 50,
                    marginTop: "5%",
                    fontFamily: "Poppins",
                    fontSize: 15
                  }}> See Courses</button>
        </div>
        
       </div>
  )
}

export default Adv