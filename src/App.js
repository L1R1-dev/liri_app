import React, { useEffect, useState } from 'react'
import './App.css';

import PokeApp from './container/PokeApp';


function App() {
  const [closePokeContainer, setClosePokeContainer] = useState(false)
    const handleClick =(e)=>{     
        const searchInput = document.getElementById('searchinput')
        const pokeItem = document.getElementsByClassName('pokeItem')
           
          if( e.target === searchInput || e.target === pokeItem ){
            
            return setClosePokeContainer(false)
          } else {
            setClosePokeContainer(true)
          }
          
  
      }
  
      return (
    <div className="App" onClick={handleClick}>
      <PokeApp onClosing={closePokeContainer} />

    </div>
  );
}

export default App;
