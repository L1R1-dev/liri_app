import React, { createContext, useEffect, useMemo, useState } from 'react'
import { Loading } from '../animation/Loading'
import useData from '../Hooks/useData'
import '../css/loading.css'

export const UpperPoke = createContext()

const GlobalState = ({ children }) =>{ 
    const [ data, loading ] = useData('https://pokeapi.co/api/v2/pokedex/1/')
    const [ show, setShow ] = useState()
    const lettres = ['C','H','A','R','G','E','M','E','N','T','.','.','.']
    const dataPoke = useMemo(()=>{
        return data
        
    },[data])
    useEffect(()=>{
        if ( loading ) {
            setShow(<Loading lettres={lettres} />) 
        } else {

            setShow(children) 
        }
    },[loading,children])
   !loading && data.length !== 0 && show.length !== 0 && console.log(data,show)
    return(
        <UpperPoke.Provider value={dataPoke}> 
            {
                show
            }
        </UpperPoke.Provider>
    )
}

export default GlobalState
