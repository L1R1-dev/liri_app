import React, { createContext, useState } from 'react'

export const UpperPoke = createContext()

const GlobalState = ({ children }) =>{ 
    // const [pokemons,setPokemons] = useState([])
    const [pokemons,setPokemons] = useState({
        items:[]
    })
    const valPoke = {
        pokemons,
        setPokemons,
    }
    
    return(
        <UpperPoke.Provider value={valPoke}>            
            {children}
        </UpperPoke.Provider>
    )
}

export default GlobalState
