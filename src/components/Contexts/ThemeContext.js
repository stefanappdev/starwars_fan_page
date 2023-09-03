import React,{useContext,createContext,useState} from "react";

const ThemeContext=createContext();

const useThemeContext=()=>{
    return(useContext(ThemeContext))
}

const ThemeContextProvider=({children})=>{
   const[isDark,SetisDark]=useState(true);

   const setTheme=()=>{
        SetisDark(prevtheme=>!prevtheme)
   }

   const providerValues={
    isDark:isDark,
    setTheme:setTheme
   }

   return(
            <ThemeContext.Provider value={providerValues}>
                    {children}
            </ThemeContext.Provider>

   )


}

export {useThemeContext,ThemeContextProvider}