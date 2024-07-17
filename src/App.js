
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Room from './pages/room/Room';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
           <Route path="/" exact element={<Home/>}/>
           <Route path="/room/:roomId" element={<Room/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
