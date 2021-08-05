import React, { createContext, useState } from 'react'


export const UpperState = createContext()

const GlobalState = (props) =>{ 
    const [pokemons,setPokemons] = useState([])
    const [comparaison,setComparaison] = useState({0: null,1: null})
    const val = {
        pokemons,
        comparaison,
        setPokemons,
        setComparaison

    }
    
    return(
        <UpperState.Provider value={val}>
            {console.log('render')}
            {props.children}
        </UpperState.Provider>
    )
}

export default GlobalState
