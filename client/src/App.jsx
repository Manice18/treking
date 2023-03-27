import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/pages/landingPage/Landing";
import Second from "./components/pages/secondPage/Second";
import Landing1 from "./components/pages/thirdPage/Landing1";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/destination' element={<Second/>} />
        <Route path='/des' element={<Landing1/>}/>
      </Routes>
    </div>
  )
}

export default App
