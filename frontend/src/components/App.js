import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
// import AboutUs from './pages/AboutUs';
// import Community from './pages/Community';
// import Highlight from './pages/Highlight';


function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/community" element={<Community/>}/>
          <Route path="/highlight" element={<Highlight/>}/> */}
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
