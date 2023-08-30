
import '../styles/App.css'
import React,{ useEffect,useState } from 'react' 

function Searchbar() {
 
  const[SearchQuery,setSearchQuery]=useState("");
  let [characters,setcharacters]=useState([]);
  const[show,setshow]=useState(false);
  let [names,setnames]=useState([])
 

  const HandleChange=(e)=>{
      setSearchQuery(e.target.value);
      setshow(true);
  }

  const filterSearch=(input)=>{
      if (SearchQuery.includes(input[0].toLowerCase())){ 
        return true
      }
  }

  const fetchCharacters=async(url)=>{
      await fetch(url,{
      method:'GET', 
      'Content-Type':'application/json',
    })
    .then(resp=> resp.json())
    .then(data=>{
      
      setcharacters(data.results);
      let cnames=[]
      

      for (let x=0;x<data.results.length;x++){
        cnames.push(data.results[x].name)
      
      }
      console.log("names are:",cnames)
      setnames(cnames);
      console.log("Character names:",names)
    })
}

  useEffect(()=>{
    fetchCharacters("https://swapi.dev/api/people?/page=1")
 .catch(err=>{
   console.log('Something went wrong',err.message)
 })
 },[])

console.log("characters array:",characters)
console.log("names array:",names)
let SearchResults=names.filter(filterSearch).map(name=>{
      return(<p onClick={()=>{
        
                              setSearchQuery(name)
                              setshow(false)  
                            
                            }}>{name}</p>)
                          })


  return (
    <React.Fragment>

            <span>
                <input type='text' value={SearchQuery} onChange={HandleChange} placeholder="search..."/>
            </span>
                            
           {show? <div id="results-dropdown">
                    {SearchResults}
                    </div>:
                    
                    <div></div>}


    </React.Fragment>
  )
}

export default Searchbar