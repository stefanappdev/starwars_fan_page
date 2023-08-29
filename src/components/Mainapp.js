import React from 'react'
import Home from './Home';
import { Route,Routes,Link } from 'react-router-dom';
import Characters from './Characters';
import Searchbar from './Searchbar';
import '../styles/App.css'


const Mainapp = () => {
  return (
    <div>

     <div id="Searchbar_Navbar_container">
                <nav  class="navbar" id="main-nav">
                  <Link to={'/'}>Home</Link>
                  <Link to={'characters'}>Characters</Link>
                </nav>

                <Searchbar/>    
      </div>


      <div id="anikin_vs_obiwan">
            <img  id="anikin_vs_obiwan_img" src="/images/ankin_vs_obiwan.jpg"/>
        </div>
        

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='characters' element={<Characters/>}/>
      </Routes>

    </div>
  )
}

export default Mainapp;