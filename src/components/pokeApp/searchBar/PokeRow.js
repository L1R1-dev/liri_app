import React, { useContext, useEffect, useRef, useState } from 'react'
import { UpperState } from '../../../contextApi/GlobalState'

export default function PokeRow({data,counter}) {
    const val = useContext(UpperState)
    const [show, setShow] = useState(false)
    const refData = useRef(data)
    
    useEffect(()=>{
        

        if(show){
            if(val.comparaison[0] === null){
                val.setComparaison(s=>({
                    ...s,
                    0:refData.current
                }))  

            } else {
                val.setComparaison(s=>({
                    ...s,
                    1:refData.current
                }))
            }

        } else {
            for(const [key,value] of Object.entries(val.comparaison)){
                if(value !== null && value.id === refData.current.id){
                    val.setComparaison(s=>({
                        ...s,
                        [`${key}`]:null
                    }))
                    
                }
                
            }
        }
    },[show])
    

    
    function handleClick(e){
        const targetId = e.target.id
        setShow(!show)
        
        if(counter>= 2 && !show){
            console.log('2 composant max');
            return 
        }  
    }
    
    
    
    return (
        <li id={refData.current.id} onClick={ handleClick } >
            {refData.current.langName}: {JSON.stringify(show)}
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
        