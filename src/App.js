import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0
  })
  const handleCursor = (e) => {
    setCursor({
      x: e.clientX,
      y: e.clientY
    })
  }
  const handleTextEffect = (e) => {
    const originalValue = e.target.dataset.initial
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lettersArray = e.target.innerText.split('')
    let iterations = 0
    const intervalId = setInterval(() => {
      e.target.innerText = lettersArray.map((item, index) => {
        if(index < iterations){
          return originalValue[index]
        }
          return letters[Math.floor(Math.random() * 26)];
      }).join('')
      if (iterations >= originalValue.length){clearInterval(intervalId)}
      iterations += 1
      
    }, 100);
  }

  return (
    <div className="reactcontainer" onMouseMove={(e) => handleCursor(e)}>
      <div className='cursor' style={{ top: cursor.y, left: cursor.x }}></div>
      <Navbar textEff={handleTextEffect} />
      <div className="app">
        <Routes>

          <Route path='/' element={<Home />} />
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
