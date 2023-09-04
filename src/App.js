import React from 'react'
import Mainapp from './components/Mainapp.js';
import "../src/styles/App.css"
import { ThemeContextProvider } from './components/Contexts/ThemeContext.js';
import { CharacterContextProvider } from './components/Contexts/CharacterContext.js';



const App = () => {
  

  return (

     <ThemeContextProvider>
      <CharacterContextProvider>
          <Mainapp/>
      </CharacterContextProvider>
  </ThemeContextProvider>
  )
}

export default App;