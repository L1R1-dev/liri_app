import React, { useContext, useEffect } from 'react'
import '../../../css/pokeRow.css'
import { UpperComparaison } from '../../../contextApi/GlobalStateComparaison'
import useMultiFetch from '../../../Hooks/useMultiFetch'
import useSingleFetch from '../../../Hooks/useSingleFetch'

export default function PokeRow({data}) {
    const valComp = useContext(UpperComparaison)
    // const [loading1,data1,]=useSingleFetch(valComp.state[0] !== null && valComp.state[0].pokemon)
    // const [loading2,data2,]=useSingleFetch(valComp.state[1] !== null && valComp.state[1].pokemon)
    const stateOfValComp = valComp.state;
    const elem1 = stateOfValComp[0]
    const elem2 = stateOfValComp[1]    
    
    const fullState = elem1 !== null && elem2 !==  null
    // const elemInState = ( elem1 empty or id of elem1 != id of this Row ) and ( elem2 empty and id of elem2 != id of this Row )
    const elemNotInState = ( elem1 === null || (elem1.id !== data.id) ) && ( elem2 === null || (elem2.id !== data.id) ) 
    
    const show = elemNotInState ? false : true 
    // !loading1 && console.log(data1.types)
    
    function handleClick(e){
        e.stopPropagation()
        if( elemNotInState  ) {
            if( !fullState ) {
                valComp.dispatch({ type: 'ADD', payload: data })

            }else {
                console.log('toMuch');
            }
        } else {
            for(const [key,value] of Object.entries(stateOfValComp)){
                if(value !== null && data.id === value.id){
                    valComp.dispatch({ type: 'DELETE', payload: Number(key) })
                }
            }
        }
    }
     
    return (
        <li id={data.id} className='pokeItem' onClick={ handleClick } >
            {data.langName}: 
            {JSON.stringify(show)}
        </li>
    )
}

// if(p.id === Number(targetId)){
//     // FOR AN STATE OF ARRAY MANAGEMENT I USE SLICE
//     //     1. COPY PREVIOUS STATE FROM BEGGINING TO THE INDEX OF ELEMENT ([i] EXCLUDE)
//     //     2. DO WHAT I WANT TO DO
//     //     3. DELET THE ELEMENT [i+1] with slice
//     val.setPokemons(s=>([
//         ...s.slice(0,[i]),
//         {
//             ...s[i],
//             show: !s[i].show,
            
//         },
//         ...s.slice([i+1])
//     ]))
// }
        