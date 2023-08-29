import React from 'react'
import Mainapp from './components/Mainapp.js';
import {BrowserRouter as Router} from 'react-router-dom';
import "../src/styles/App.css"


const App = () => {
  return (
    <div className='app-bg'>
        <Router>
          <Mainapp/>
        </Router>
    
    </div>
  )
}

export default App;