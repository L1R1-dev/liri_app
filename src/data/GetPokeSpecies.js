import React, { useContext, useEffect, useState } from 'react'

import useSingleFetch from '../Hooks/useSingleFetch'
import useMultiFetch from '../Hooks/useMultiFetch'
import { UpperPoke } from '../contextApi/GlobalState'

export default function GetPokeSpecies() {
    const [urlLoading, urlData,] = useSingleFetch('https://pokeapi.co/api/v2/pokedex/2/')
    const [speciesUrl,setSpeciesUrl] = useState([])
    const [, spceciesData,] = useMultiFetch(speciesUrl)
    const valPoke = useContext(UpperPoke)
    
    const [dataForSearching, setDataForSearching] = useState([])
    
    useEffect(()=>{
        !urlLoading && urlData.pokemon_entries.forEach(p=>{
            setSpeciesUrl(s=>[
                ...s,
                p.pokemon_species.url
            ])
        })
        return () =>{
            setSpeciesUrl([])
        }
    },[urlData.pokemon_entries, urlLoading])

    useEffect(()=>{
        spceciesData.forEach(s=>{
            let items ={
                id: s.id,
                is_baby: s.is_baby ? true : false,
                is_legendary: s.is_legendary? true : false,
                is_mythical: s.is_mythical? true : false,
            }
            s.names.forEach( n => {
                if(n.language.name === 'fr') {
                    items.langName = n.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()                                
                }
            })
            s.varieties.forEach( v=> {
                if(v.is_default){
                    items.pokemon = v.pokemon.url
                }
            })
            setDataForSearching(s=>([
                ...s,
                items
            ]))
            return ()=>{
                setDataForSearching([])
            }
        })
    },[spceciesData])

    useEffect(()=>{
        valPoke.setPokemons(dataForSearching)
        return ()=>{
            valPoke.setPokemons([])
        }
    },[dataForSearching, valPoke])
    
    // dataForSearching.length !== 0 && console.log(dataForSearching);
    return (
        <React.Fragment>
            
        </React.Fragment>
    ) 


    
}
