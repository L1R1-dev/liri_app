import React, { useState } from 'react'
import {
  BrowserRouter as Router ,
  Switch ,
  Route ,
  Link
} from "react-router-dom"
import './App.css';
import About from './container/About';
import Home from './container/Home';
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
      <Router>
        <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/PokeApp">PokeApp</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
            </ul>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/PokeApp" >
              <div className="App" onClick={handleClick}>
                <PokeApp onClosing={closePokeContainer} />
              </div>
            </Route>
            <Route path="/About" >
              <About />
            </Route>
          </Switch>
        </div>  
      </Router>
    );
}

export default App;
