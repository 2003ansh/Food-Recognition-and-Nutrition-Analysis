import React,{useState,useEffect} from 'react'
import Navs from './Components/nav/Navs.jsx'
import Home from './Components/home/Home.jsx'
import './App.css'
export default function App() {
  const [mode, setMode] = useState('light');

  useEffect(() => {
        document.body.style.backgroundColor = 'white';
      }, []);

      const toggleMode = () => {
        if (mode === 'light') {
          setMode('dark');
          document.body.style.backgroundColor = '#010822';
          
    
        } else {
          setMode('light');
          document.body.style.backgroundColor = 'white';
         
        }
      };
  return (
    <>
      <Navs mode={mode} toggleMode={toggleMode} />
      <Home mode={mode} toggleMode={toggleMode} />
    </>
  )
}
