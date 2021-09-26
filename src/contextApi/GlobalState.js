import React, { createContext, useMemo } from 'react'
import useData from '../Hooks/useData'

export const UpperPoke = createContext()

const GlobalState = ({ children }) =>{ 
    // const [pokemons,setPokemons] = useState([])
    // const [pokemons,setPokemons] = useState({
    //     items:[]
    // })
    const [ data ] = useData('https://pokeapi.co/api/v2/pokedex/2/')

    const dataPoke = useMemo(()=>{
        return {
            data
        }
    },[data])
    
    return(
        <UpperPoke.Provider value={dataPoke}> 
            {children}
        </UpperPoke.Provider>
    )
}

export default GlobalState
