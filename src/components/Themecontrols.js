import React from 'react'
import { useThemeContext } from './Contexts/ThemeContext';

const Themecontrols=()=>{


const Theme=useThemeContext()

return (<div>

                    <button  

                    onClick={()=>Theme.setTheme()} 
                    style={{borderRadius:"5px",color:"black"}}>
                        {Theme.isDark?"Currently in Dark mode":"Currently in light mode"}
                    
                    </button>
        

    </div>)
    
    
    
    }


export default Themecontrols