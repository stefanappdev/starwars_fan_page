import React,{useContext,createContext,useState} from 'react'

const CharacterContext=createContext()

const useCharacterContext=()=>{
    return useContext(CharacterContext)
}

const CharacterContextProvider= ({children}) => {

    const[Character,setCharacter]=useState({})
    
    const SetCharacter=(newCharacter)=>{
        setCharacter(newCharacter)
    }

  return (
    <CharacterContext.Provider value={{Character,SetCharacter}}>
        {children}
    </CharacterContext.Provider>
  )
}

export {useCharacterContext,CharacterContextProvider}