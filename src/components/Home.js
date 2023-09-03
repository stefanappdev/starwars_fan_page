import React from 'react'
import "../styles/App.css"
import { useThemeContext } from './Contexts/ThemeContext';



const Home = () => {

const Theme=useThemeContext()


  return (
    <div>
        <h1 style={{color:Theme.isDark?"white":"black"}}>You are Home</h1>

    </div>
  )
}


export default Home;