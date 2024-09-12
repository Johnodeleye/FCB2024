import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Article from "./components/Article";
import Home from "./components/Home";
import Adv from "./components/Adv";
import Feedback from "./components/Feedback";
import Success from "./components/Success";
import Footer from "./components/Footer";
import {Routes, Route} from "react-router-dom"


function App() {
  return (
    <div style={{
      overflow: "hidden",
      scrollBehavior: "smooth"
    }}>

      <Navbar/>


      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/feedback" element={<Feedback/>}/>
      <Route path="/success" element={<Success/>}/>
      </Routes>
  
      <Footer/>
    </div>
  );
}

export default App;
