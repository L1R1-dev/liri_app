import { useEffect, useState } from 'react'

import useSingleFetch from '../Hooks/useSingleFetch'
import useMultiFetch from '../Hooks/useMultiFetch'
import { Loading } from '../animation/Loading'

export default function useData(url) {
    // 1.URLS
    const [urlLoading, urlData,] = useSingleFetch(url)
    const [speciesUrl,setSpeciesUrl] = useState([])
    // 2.DATA
    const [loading, speciesData,] = useMultiFetch(speciesUrl)
    
    // 3.Sharing state ? 
    const [state, setState] = useState([])
    

    // 2-
    useEffect(()=>{
        !urlLoading  && urlData.pokemon_entries.forEach(p=>{
            setSpeciesUrl(s=>[
                ...s,
                p.pokemon_species.url
            ])
        })
        return () =>{
            setSpeciesUrl([])
        }

    },[urlLoading])

    //from speciesUrls make an initial object (items) => (dataForSearging)
    
    useEffect(()=>{
        (!loading && speciesData !== ( undefined || null )) && speciesData.forEach( s => {
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
            setState(s=>([
                ...s,
                item
            ]))
            return ()=>{
                setState([])
            }
        })
    },[loading, speciesData])
    // !loading && console.log(state)
    // !loading && state.length !== 0 ? console.log(state) : console.log('loading')
    
    // !loading && state.length !== 0 ? console.log(urlData) : console.log('loading')
    return [
        state,
        loading
    ]
}
