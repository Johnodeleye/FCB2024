import React from 'react'

const Article = () => {

  return (

    <div style={{
        width: "100vw",
        //height: "100vh",
        backgroundColor: "#FFFFFF",
        paddingBlock: "4%",
                //padding: "%",
        display: "flex",
        flexDirection: "column",
    }}>

        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "10%",
            alignItems: "center"
           
        }}>

            <div style={{
                width: "auto",
                height: "auto",
                display: "flex",
                flexDirection: "column",

             
            }}>
                <h1 style={{
                    color: "#1C1C1C", 
                    fontSize: 75, 
                    textAlign: "left",
                    fontWeight: "normal",
                    fontFamily: "Poppins",
                    marginBottom: -10
        
                    
                    }}>Deliberate And <br/>Strategic Impact</h1>

                    <p style={{
                        color: "#666666",
                        fontSize: 20,
                    }}>
                      As a  beacon of innovation and learning,<br/> we are dedicated to altering lives and <br/> communities  
                    </p>

            </div>

            <img src="./f1.jpg" alt="fi" style={{
                objectFit: "contain",
                width: "30%"
            }}/>

        </div>


        <div style={{
            display: "flex",
            flexDirection:"row-reverse",
            justifyContent: "center",
            gap: "3%",
            alignItems: "center",
            marginTop: "10%"
    
           
        }}>

            <div style={{
                width: "auto",
                height: "auto",
                display: "flex",
                flexDirection: "column",
                marginBottom: 80,

             
            }}>
                <h1 style={{
                    color: "#1C1C1C", 
                    fontSize: 30, 
                    textAlign: "left",
                    fontWeight: "normal",
                    fontFamily: "Poppins",
                    marginBottom: -10
        
                    
                    }}>Level up that skill</h1>

                    <p style={{
                        color: "#666666",
                        fontSize: 15,
                    }}>
                      Gain more knowledge and experience to reach a higher performance<br/> standard and become better and more proficient in that skill.

                    </p>
<h1 style={{
                    color: "#1C1C1C", 
                    fontSize: 30, 
                    textAlign: "left",
                    fontWeight: "normal",
                    fontFamily: "Poppins",
                    marginBottom: -10
        
                    
                    }}>Explore new skill</h1>

                    <p style={{
                        color: "#666666",
                        fontSize: 15,
                    }}>
                      Get started with a new skill to widen your horizons digitally. Take advantage<br/> of this opportunity right away.
                    </p>
                  <button style={{
                    backgroundColor: "#1C1C1C",
                    color: "#F5F5F5",
                    borderRadius: 8,
                    width: "25%",
                    height: 50,
                    marginTop: "5%",
                  }}> Get Started</button>

            </div>

            <img src="./f2.jpg" alt="f2" style={{
                objectFit: "contain",
                width: "30%"
            }}/>

        </div>

    </div>
  )
}

export default Article