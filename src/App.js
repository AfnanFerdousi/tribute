import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './pages/Shared/Navbar';
// import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home';

function App() {
  useEffect(() => {
    AOS.init({
      disable: function() {
        const maxWidth = 720;
        return window.innerWidth < maxWidth;
      }
    });
  }, [])
  return (
    <div>
      <Navbar />
      <Home/>
    </div>
  );
}

export default App;
