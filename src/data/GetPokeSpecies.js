import React, { useContext, useEffect, useState } from 'react'

import useSingleFetch from '../Hooks/useSingleFetch'
import useMultiFetch from '../Hooks/useMultiFetch'


import { UpperState } from '../contextApi/GlobalState'
import SearchBar from '../components/pokeApp/searchBar/SearchBar'









export default function GetPokeSpecies() {
    const [singleLoading, singleData, singleError] = useSingleFetch('https://pokeapi.co/api/v2/pokedex/2/')
    const [urls,setUrls] = useState([])
    const [multiLoading, multiDatas, multiError] = useMultiFetch(urls)

    const [dataForSearching, setDataForSearching] = useState([])
    

    const val = useContext(UpperState)
    

    useEffect(()=>{
        if(!singleLoading) {
            singleData.pokemon_entries.forEach(p=>{
                setUrls(s=>[
                    ...s,
                    p.pokemon_species.url
                ])
            })
        }
    },[singleLoading])

    useEffect(()=>{
        if(!multiLoading && multiDatas.length !== 0) {
            multiDatas.forEach(element=>{
                let items ={
                    id: element.id,
                    is_baby: element.is_baby ? 'baby':'',
                    is_legendary: element.is_legendary? 'legendary':'',
                    is_mythical: element.is_mythical? 'mythical':'',
                    show: false
                }
                element.names.forEach( n => {
                    if(n.language.name === 'fr') {
                        items.langName = n.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()                                
                    }
                })
                element.varieties.forEach( v=> {
                    if(v.is_default){
                        items.pokemon = v.pokemon.url
                    }
                })
                setDataForSearching(s=>([
                    ...s,
                    items
                ]))
            })
        }
    },[multiDatas])

    useEffect(()=>{
        
        !multiLoading && val.setPokemons(dataForSearching)

    },[dataForSearching, multiLoading])
    

    return (
        <React.Fragment>
            {
                !multiLoading && multiDatas.length !== 0 && <SearchBar />
            }
        </React.Fragment>
    ) 


    
}
