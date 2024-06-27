// import logo from './logo.svg';
// import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleGray = () => {
    if (document.getElementsByClassName('gray')) {
      setMode('light');
      showAlert("Gray Theme Has Been Enables", "Success")
    }
  }

  const toggleDark = () => {
    if (document.getElementsByClassName('dark')) {
      setMode('dark');
      showAlert("Dark Theme Has Been Enables", "Success")
    }
  }

  const toggleRed = () => {
    if (document.getElementsByClassName('red')) {
      setMode('danger');
      showAlert("Red Theme Has Been Enables", "Success")
    }
  }

  const toggleBlue = () => {
    if (document.getElementsByClassName('blue')) {
      setMode('primary');
      showAlert("Blue Theme Has Been Enables", "Success")
    }
  }

  const toggleGreen = () => {
    if (document.getElementsByClassName('green')) {
      setMode('success');
      showAlert("Green Theme Has Been Enables", "Success")
    }
  }

  const toggleYellow = () => {
    if (document.getElementsByClassName('yellow')) {
      setMode('warning');
      showAlert("Yellow Theme Has Been Enables", "Success")
    }
  }

  const toggleSky = () => {
    if (document.getElementsByClassName('sky')) {
      setMode('info');
      showAlert("Sky Theme Has Been Enables", "Success")
    }
  }


  return (
    <>
      <Router>
        <Navbar Title="TextUtils" About="About" mode={mode} toggleGray={toggleGray} toggleDark={toggleDark} toggleRed={toggleRed} toggleBlue={toggleBlue} toggleGreen={toggleGreen} toggleYellow={toggleYellow} toggleSky={toggleSky} />
        <Alert alert={alert} />

        <Routes>
          <Route path="/" element={

            <TextForm Label="Enter Text to Analyze" placeholder="Enter Text here" mode={mode} />
          }></Route>

          <Route path="/about" element={
            <About mode={mode} />

          }></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
