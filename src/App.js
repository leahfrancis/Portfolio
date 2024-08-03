import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Project from"./routes/Project";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Success from "./routes/success"
import { Routes ,Route} from "react-router-dom";
function App(){
  return (
   <>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/project" element={<Project/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/success" element={<Success />} />
   </Routes>
   </>
  );
}

export default App;
