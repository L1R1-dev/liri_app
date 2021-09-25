import React, { useState } from 'react'
import GlobalState from '../contextApi/GlobalState'
import GlobalStateComparaison from '../contextApi/GlobalStateComparaison'
import GetPokeSpecies from '../data/GetPokeSpecies'
import SearchBar from '../components/pokeApp/searchBar/SearchBar'
import Comparaison from '../components/pokeApp/comparaison/Comparaison'
import '../css/pokeApp.css'
export default function PokeApp({onClosing}) {
    const [filterText,setFilterText] = useState('')
    const [toggle,setToggle] = useState(true)
    
    return (
        <div className='pokeApp' >
            {/* Searbar influcance PokeContainer */}

            <div id='some-space'>
                {/* Somthing Else ? */}
            </div>
            <GlobalState> 
                {/* State Of Loaded Pokemons */}
                <GetPokeSpecies />
                    {/* The Previous Component Set The Data */}
                <GlobalStateComparaison>
                    {/* State Of Pokemons To Compare */}
                    <SearchBar 
                        filterText={filterText}
                        onFilterTextChange={(elem)=> setFilterText(elem)}
                        onClosing={onClosing}
                        />
                    <button onClick={()=>setToggle(!toggle)} > changer { toggle ? 'deff - att' : 'att - deff'}</button>
                    <Comparaison toggle={toggle} setToggle={setToggle} />
                </GlobalStateComparaison>

            </GlobalState>
            
            

        </div>
    )
}
