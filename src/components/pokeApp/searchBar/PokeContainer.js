import React, { useContext } from 'react'
import { UpperState } from '../../../contextApi/GlobalState';

import PokeRow from './PokeRow'

export default function PokeContainer({filterText}) {
    const val = useContext(UpperState)
    const container = []
    let counter = 0
    
    // val.comparaison.forEach(p=>{
    //     for(const [key,value] of Object.entries(p)){
    //         if(key === 'show' && value) {
    //             counter ++
    //         }
    //     }

    // })

    for(const [key,value] of Object.entries(val.comparaison)){
        if(value !== null){
            counter++

        }
    }
    val.pokemons.length!==0 &&  Array.from(val.pokemons).forEach( (d,i)=>{
        if(d.langName.indexOf(filterText) === -1){
            return    
        }
        container.push(<PokeRow key={d.langName} counter={counter} data={d}/>)
    })



    return (
        <ul style={{listStyle:'none', overflowY:'scroll',maxWidth:'200px', maxHeight:'280px',border:'1px solid black'}}>
            {
                container
            }
        </ul>
    )
}
