import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis'
import React from 'react'
import './App.css';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const LazyHome = React.lazy(() => import('./pages/Home'))
const LazyInfo = React.lazy(() => import('./pages/InfoPage'))
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
    width: 15,
    height: 15
  })

  const handleCursor = (e) => {
    setCursor((prev) => ({
      ...prev,
      x: e.clientX,
      y: e.clientY
    }))
  }
  const handleCursorSizeOnOver = (e) => {
    setCursor({
      x: e.clientX,
      y: e.clientY,
      width: 90,
      height: 90
    })
  }
  const handleCursorSizeOnLeave = (e) => {
    setCursor({
      x: e.clientX,
      y: e.clientY,
      width: 15,
      height: 15
    })
  }

  const handleTextEffect = (e) => {
    const originalValue = e.target.dataset.initial
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lettersArray = e.target.innerText.split('')
    let iterations = 0
    const intervalId = setInterval(() => {
      e.target.innerText = lettersArray.map((item, index) => {
        if (index < iterations) {
          return originalValue[index]
        }
        return letters[Math.floor(Math.random() * 26)];
      }).join('')
      if (iterations >= originalValue.length) { clearInterval(intervalId) }
      iterations += 1

    }, 100);
  }
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)


    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }, [])

  


  return (
    (
      <div className="reactcontainer" onMouseMove={(e) => handleCursor(e)}>
    
         

        <div className='cursor' style={{ top: cursor.y, left: cursor.x, width: cursor.width, height: cursor.height }}></div>

        <Navbar textEff={handleTextEffect} />
        {
          isLoading ? (<Loader />) :
            (
              <>

                <div className="app">
                  <ScrollToTop />
                  <Routes>
                    
                    <Route path='/' element={
                      <React.Suspense fallback={(<Loader />)}>
                        <LazyHome cursorSizeUpdate={handleCursorSizeOnOver} cursorLeaveUpdate={handleCursorSizeOnLeave} />
                      </React.Suspense>} />
                    <Route path='/info' element={
                    <React.Suspense fallback={(<Loader/>)}>
                      <LazyInfo textEff={handleTextEffect} />
                    </React.Suspense>} />
                  </Routes>
                  <Footer />
                </div>
              </>
            )
        }

      </div>
    )
  )
};


export default App;
