import React from 'react'
import { useThemeContext } from './Contexts/ThemeContext';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness5Icon from '@mui/icons-material/Brightness5';
const Themecontrols=()=>{


const Theme=useThemeContext()

return (<div className='ThemeContainer'>

                    <button  

                    onClick={()=>Theme.setTheme()} 
                    style={{borderRadius:"5px", marginLeft:"5px", display:"inline",color:"black"}}>
                        {Theme.isDark?<Brightness5Icon/>
                        :<DarkModeIcon/>}
                    
                    </button>
        

    </div>)
    
    
    
    }


export default Themecontrols