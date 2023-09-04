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
 
     <div id="Searchbar_Navbar_container">

          <Searchbar/>

      </div>

      <Themecontrols/>

      <Character_details character={CharacterContext.Character}/>
  </div>
  )
}

export default Mainapp;
