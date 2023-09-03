import React from 'react'
import Home from './Home';
import { Route,Routes,Link } from 'react-router-dom';
import Characters from './Characters';
import Searchbar from './Searchbar';
import '../styles/App.css'
import { useThemeContext } from './Contexts/ThemeContext';

const Mainapp = () => {

  const Theme=useThemeContext();

  

  return (
    
  <div className={Theme.isDark?'app-bg-dark':"app-bg-light"}>
 
    <div>


     <div id="Searchbar_Navbar_container">
                <nav  class="navbar" id="main-nav">
                  <Link style={{color:Theme.isDark?"white":"black"}} to={'/'}>Home</Link>
                  <Link style={{color:Theme.isDark?"white":"black"}} to={'characters'}>Characters</Link>
                </nav>

                <Searchbar/>    

      </div>

                <button  

                  onClick={()=>Theme.setTheme()} 
                  style={{borderRadius:"5px",color:"black"}}>
                    {Theme.isDark?"Currently in Dark mode":"Currently in light mode"}
                </button>
      


      
        

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='characters' element={<Characters/>}/>
      </Routes>

       </div>
  </div>
  )
}

export default Mainapp;