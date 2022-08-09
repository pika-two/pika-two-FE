import { useState } from 'react';
import './App.css';
import IntroPage from './page/UI/IntroPage';
import RegisterInfo from './page/UI/RegisterInfo';
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = "/" element = {<IntroPage/>}/>
        <Route exact path = "/register" element = {<RegisterInfo/>}/>
        
      </Routes>
    </BrowserRouter>


  )
}



export default App;
