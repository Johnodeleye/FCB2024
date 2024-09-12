import React from "react";

const Footer = () => {
  return (
    <div style={{
      backgroundColor:'white',
      display: 'flex',
      flexDirection: 'row',
      height: "40vh",
      margin: "3%"
    }}>
      <div style={{
        width: '50%',
        paddingLeft: "10%",
        paddingRight: "2%"
      }}>
        <img src='./IncubatorLogo2.png' alt='logo2' width={"45%"}/>
        <p style={{
          fontSize: "20px",
          fontWeight: 'normal',
          marginBottom: "10%"}}>
            Do you have any comments regarding our <br/> website or previous programs? Let's hear<br/>your thoughts!</p>
        <img src='./Social Icon (1).png' alt='logo2' />
        <p>Copyright &copy;  2024 The IncubatorNG</p>
      </div>
      <div style={{
        width: "25%"
      }}>
        <h3>Information</h3>
        <p> About Us</p>
        <p> Contact Us</p>
        <p> FAQs</p>
      </div>
      <div style={{
        width: "50%"
      }}>
        <h3>Popular Courses</h3>
        <p> FutureClan</p>
        <p> Digital Skillup</p>
        <p> Summer Code for Kids</p>
      </div>
    </div>
  )
}

export default Footer;