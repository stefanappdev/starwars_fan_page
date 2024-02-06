import React,{ useEffect,useState } from 'react'
import { useThemeContext } from './Contexts/ThemeContext';
import { Padding } from '@mui/icons-material';

function Character_details({character}) {
  let theme=useThemeContext()

  let style={
    color:theme.isDark?'white':"black",
    padding:'20px',
    fontWeight:'bold'
  }

  let src=`/images/characters/${character.name}.png`
  let alt=`picture of ${character.name}`
  return (
    <React.Fragment>
      
      
                 <h1 style={style}>{character.name?`${character.name}`:""}</h1>
      
      {character.name&&<div className='character-img-container'>
          <img src={src} alt={alt}/>
      </div>}

      {character.name&&<div className='character-bio'>
        <h2 style={style}>Character Bio</h2>
            <span style={style}>Gender:{character.gender}</span>
            <span style={style}>DOB:{character.birth_year}</span>
            <span style={style}>Hair Color:{character.hair_color}</span>
            <span style={style}>Skin Color:{character.skin_color}</span>
      </div>}

    </React.Fragment>
  )
}

export default Character_details