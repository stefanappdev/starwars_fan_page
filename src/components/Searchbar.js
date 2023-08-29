
import '../styles/App.css'
import React,{ useEffect,useState } from 'react' 

function Searchbar() {

  return (
    <React.Fragment>

            <span>
                <input type='text' placeholder="search..."/>
            </span>
                            
            <div id="results-dropdown">
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                
            </div>


    </React.Fragment>
  )
}

export default Searchbar