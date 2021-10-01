import React, { createContext, useMemo } from 'react'
import { Loading } from '../animation/Loading'
import useData from '../Hooks/useData'
import '../css/loading.css'

export const UpperPoke = createContext()

const GlobalState = ({ children }) =>{ 
    const [ data, loading ] = useData('https://pokeapi.co/api/v2/pokedex/1/')
    const lettres = ['C','H','A','R','G','E','M','E','N','T','.','.','.']
    // const [pokemons,setPokemons] = useState([])
    // const [pokemons,setPokemons] = useState({
    //     items:[]
    // })
    
    
    const dataPoke = useMemo(()=>{
        return {
            data
        }
    },[data])
    // !loading && data.length !== 0 && console.log(dataPoke.data)
    return(
        <UpperPoke.Provider value={dataPoke.data}> 
            {
                // <Loading lettres={lettres} />
                loading || data.length === 0 ? <Loading lettres={lettres} /> : children 
                
                // children
                
            }
            {/* {
                console.log('render')
            } */}
        </UpperPoke.Provider>
    )
}

export default GlobalState
