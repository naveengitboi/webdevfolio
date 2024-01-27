import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Work from './pages/Work';

function App() {
  return (
    <div className="reactcontainer">
      <Navbar/>
      <div className="app">
        <Work/>
      </div>
    </div>
  );
}

export default App;
