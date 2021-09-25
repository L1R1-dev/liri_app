import React, { useContext, useEffect, useState } from 'react'

import useSingleFetch from '../Hooks/useSingleFetch'
import useMultiFetch from '../Hooks/useMultiFetch'
import { UpperPoke } from '../contextApi/GlobalState'

export default function GetPokeSpecies() {
    // 1.URLS
    const [urlLoading, urlData,] = useSingleFetch('https://pokeapi.co/api/v2/pokedex/2/')
    const [speciesUrl,setSpeciesUrl] = useState([])

    // 2.DATA
    const [loading, speciesData,] = useMultiFetch(speciesUrl)
       
    // 3.CONTEXT
    const valPoke = useContext(UpperPoke)
    
    // 2-
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

    //from speciesUrls make an initial object (items) => (dataForSearging)
    useEffect(()=>{
        (!loading && speciesData !== undefined) && speciesData.forEach( s => {
            let item = {
                id: s.id,
                is_baby: s.is_baby ? true : false,
                is_legendary: s.is_legendary? true : false,
                is_mythical: s.is_mythical? true : false,
            }
            s.names.forEach( n => {
                if(n.language.name === 'fr') {
                    item.langName = n.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()                                
                }
            })
            s.varieties.forEach( v => {
                if(v.is_default){
                    item.pokemon = v.pokemon.url
                }
            })
            valPoke.setPokemons( s => ({
                items:[ 
                    ...s.items,
                    item
                ]
            }))
            return ()=>{
                valPoke.setPokemons({
                    items:[]
                })
            }
        })
    },[loading, speciesData])

    
    // dataForSearching.length !== 0 && console.log(dataForSearching);
    return (
        <React.Fragment>
            
        </React.Fragment>
    ) 
    
    
}

// OLD CODE

//set dataForSearching to valPoke (globalState) 
// useEffect(()=>{
//     valPoke.setPokemons(dataForSearching)
//     return ()=>{
//         valPoke.setPokemons([])
//     }
// },[dataForSearching, valPoke])
 // setDataForSearching( s => ([

 //     ...s,
//     items
// ]))
// return ()=>{
//     setDataForSearching([])
// }