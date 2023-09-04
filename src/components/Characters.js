import React,{ useEffect,useState } from 'react'
import { useThemeContext } from './Contexts/ThemeContext';

function Character_details({character}) {
  let theme=useThemeContext()

  let style={
    color:theme.isDark?'white':"black"
  }

  let src=`/images/characters/${character.name}.jpg`

  return (
    <React.Fragment>
      <h1 style={style}>Character name:{character.name}</h1>
      
      <div className='character-img'>
          <img src={src}/>
      </div>
    </React.Fragment>
  )
}

export default Character_details