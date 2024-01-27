import { useEffect, useState } from 'react';
import './App.css';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';
import Work from './pages/Work';

function App() {
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0
  })
  const handleCursor = (e) => {
    setCursor({
      x:e.clientX,
      y:e.clientY
    })
  }

  return (
    <div className="reactcontainer" onMouseMove={(e) => handleCursor(e) }>
      <div className='cursor' style={{ top: cursor.y, left: cursor.x }}></div>
      <Navbar />
      <div className="app">
        <Introduction />
        <Work />
      </div>
    </div>
  );
}

export default App;
