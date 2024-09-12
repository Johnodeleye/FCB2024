import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
       
        <header style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#1c1c1c",
            paddingLeft: 50,
            paddingRight: 50,
            alignItems: "center",

        }}>


        <img src="logo copy.png" alt='logo' style={{
            width: "10%",
            height: "10%"
                }} />

                <nav style={{
                    display: "flex",
                    flexDirection: "row",

                }}>

                    <ul style={{
                        display: "flex",
                        flexDirection: "row",
                        listStyle: "none",
                        justifyContent: "space-between",
                        gap: 20
        
                    }}>
                        <Link to='/' style={{color: "#FFFFFF", fontSize: 18, fontFamily: "Poppins", textDecoration: "none"}}> Home</Link>
                        <Link style={{color: "#FFFFFF", fontSize: 18, fontFamily: "Poppins", textDecoration: "none"}}> Courses</Link>
                        <Link to="/feedback" style={{color: "#FFFFFF", fontSize: 18, fontFamily: "Poppins", textDecoration: "none"}}> Feedback</Link>
                        <Link style={{color: "#FFFFFF", fontSize: 18, fontFamily: "Poppins", textDecoration: "none"}}> FAQ</Link>
                    </ul>
                </nav>


            </header>

    )
}

export default Navbar