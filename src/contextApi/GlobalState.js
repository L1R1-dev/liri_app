import React, { createContext, useState } from 'react'


export const UpperPoke = createContext()

const GlobalState = ({children}) =>{ 
    const [pokemons,setPokemons] = useState([])
    const [styleCss,setStyleCss] = useState({
        searchbarCss: {
            w:null,
            h:null
        },
        pokeContainerCss:{
            h:null
        }
    })
    const valPoke = {
        pokemons,
        setPokemons,
        styleCss,
        setStyleCss
    }
    
    return(
        <UpperPoke.Provider value={valPoke}>
            {
                // console.log(styleCss.searchbarCss, styleCss.pokeContainerCss)
            }
            
            {children}
        </UpperPoke.Provider>
    )
}

export default GlobalState
