// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message,type)=>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(()=>{
        setAlert(null);
      },1500);
  }
  const toggleMode = ()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#08316b';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      <BrowserRouter>
      <Navbar title = "TextUtils" aboutText = "About-TextUtils" mode ={mode} toggleMode = {toggleMode}/>
      <Alert alert ={alert}/>
      <div className="container my-3" >
         <Routes>
         <Route path="/" element={<TextForm showAlert = {showAlert} heading = "Enter the text to analyze \below" mode ={mode}/>} />
         <Route path="about/*" element={<About />} />
         </Routes>
      </div>
      </BrowserRouter>
            
          
    </>
  );
}

export default App;
