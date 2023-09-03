import React from 'react'
import Mainapp from './components/Mainapp.js';
import {BrowserRouter as Router} from 'react-router-dom';
import "../src/styles/App.css"
import { ThemeContextProvider } from './components/Contexts/ThemeContext.js';


const App = () => {
  

  return (

     <ThemeContextProvider>
     
          <Router>
            <Mainapp/>
          </Router>
      
  </ThemeContextProvider>
  )
}

export default App;