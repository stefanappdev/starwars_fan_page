import React from 'react'
import Home from './Home';
import Characters from './Characters';
import Themecontrols from './Themecontrols';
import Searchbar from './Searchbar';
import {SubmitCharacter} from "./Searchbar";
import '../styles/App.css'
import { useThemeContext } from './Contexts/ThemeContext';
import { useCharacterContext } from './Contexts/CharacterContext';
import Character_details from './Characters';

const Mainapp = () => {

  const Theme=useThemeContext();
  const CharacterContext=useCharacterContext();
  

  return (
    
  <div className={Theme.isDark?'app-bg-dark':"app-bg-light"}>
      <main>
        <section class="header">
          <div id="Searchbar_Navbar_container">

                <Searchbar/>
                
            </div>
              <Themecontrols/>
        </section>
 
        {CharacterContext.Character&&
          <Character_details character={CharacterContext.Character}/>
          }


          {!CharacterContext.Character.name&&<div id="yoda"> 
             <img id="yoda-img" src="/images/Yoda.jpeg" alt="listen to master yoda"/>
              <p id="yoda-text" style={{color:Theme.isDark?"white":"black"}}>
                Use the searchbar you must to find your favorite character</p>
          </div>}
 

    </main>
     
  </div>
  )
}

export default Mainapp;
