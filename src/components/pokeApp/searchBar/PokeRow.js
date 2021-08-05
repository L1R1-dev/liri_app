import React, { useContext, useEffect, useState } from 'react'
import { UpperState } from '../../../contextApi/GlobalState'

export default function PokeRow({data,counter}) {
    const val = useContext(UpperState)
    const [show, setShow] = useState(false)

    
    useEffect(()=>{
        

        if(show){
            if(val.comparaison[0] === null){
                val.setComparaison(s=>({
                    ...s,
                    0:data.id
                }))  

            } else {
                val.setComparaison(s=>({
                    ...s,
                    1:data.id
                }))
            }

        } else {
            for(const [key,value] of Object.entries(val.comparaison)){
                if(value !== null && value.id === data.id){
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
        <li id={data.id} onClick={ handleClick } >
            {data.langName}: {JSON.stringify(show)}
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
        