import React,{useState,useEffect} from 'react'
import Navs from './Components/nav/Navs.jsx'
import Home from './Components/home/Home.jsx'
import Footer from './Components/footer/Footer.jsx'
import Login from './Components/login&signup/Login.jsx'
import Dailyeats from './Components/dailyeats/Dailyeats.jsx'
import './App.css'
import Chart from './Components/home/dietchart.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/about/About.jsx'
export default function App() {
  const [mode, setMode] = useState('dark');
  const [login, setLogin] = useState(false);
  const [token,setToken]=useState();
  const[image,setImage]=useState();
  const [foodname, setFoodname] = useState(null);
  const [calorieval, setCalorieval] = useState(null);
  const [loader,setLoader]=useState(false); 

  const handleimage=(image)=>{
    setImage(image);
  }
  const setDetails=(foodItem,Calories)=>{
    console.log(foodItem);
    console.log(Calories);
    setFoodname(foodItem);
    setCalorieval(Calories);
  }
  const loaderHandler=(loader)=>{
    setLoader(loader);
  }
const loginHandler=(tokens)=>{
  console.log(tokens);
  setLogin(true);
  setToken(tokens)
  setLoader(false)
  console.log(token);
}

  const logoutHandler = () => {
    // Clear the authentication token (implement this function)
    setToken();
    
    // Update the login status to false
    setLogin(false);
  };
  useEffect(() => {
        document.body.style.backgroundColor = '#010822';
      }, []);

      const toggleMode = () => {
        if (mode === 'light') {
          setMode('dark');
          document.body.style.backgroundColor = '#010822';
        } else {
          setMode('light');
          document.body.style.backgroundColor = '#fff6f6';
         
        }
      };
  return (
    <BrowserRouter>
      <Navs mode={mode} toggleMode={toggleMode} token={token} login={login} logoutHandler={logoutHandler}  />
      <Routes>
        <Route path="/" element={<Home mode={mode} toggleMode={toggleMode} handleimage={handleimage} setDetails={setDetails} token={token} />} />
        <Route path="/login" element={<Login mode={mode} login={login} loginHandler={loginHandler} toggleMode={toggleMode} loaderHandler={loaderHandler} loader={loader} token={token}/>} />
        <Route path="/dietchart" element={<Chart mode={mode} login={login} toggleMode={toggleMode}  />} />
        <Route path="/about" element={<About mode={mode} />} />
        <Route path="/dailyeats" element={<Dailyeats mode={mode} login={login} toggleMode={toggleMode} image={image} foodname={foodname} calorieval={calorieval} token={token}/>} />
       
      {/* <Login mode={mode} toggleMode={toggleMode} /> */}
      </Routes>
      <Footer mode={mode} />
    </BrowserRouter>
  )
}
