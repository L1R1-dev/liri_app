import React, { useEffect, useState } from 'react'
import useSingleFetch from '../../Hooks/useSingleFetch'
import AboutDamages from './damage_relation/AboutDamages'
import '../../css/type.css'


export default function Type({ url, position, toShow }) {
    const [keys,setKeys] = useState([])
    let name = ''
    
    useEffect(()=>{
        // name !== undefined && name !== '' && console.log(name);
        
    },[name])
    useEffect(()=>{
        if(url !== undefined && url !== null ){
            for(const key of Object.keys(url)){
                const atk = key.endsWith('to') && position === 'attack'
                const def = key.endsWith('from') && position === 'defense'
                if(atk){
                    setKeys(s=>([
                        ...s,
                        key
                    ]))
                }
                if(def){
                    setKeys(s=>([
                        ...s,
                        key
                    ]))
                }
            }
        }
        return ()=>{
            setKeys([])
        }
    },[position, url])
    
    return (
            <div id={name} className='typeOfPokemon' >
                <div className='typeLoop'>
                    {
                        keys.map(k=>{
                            if(url[k].length === 0){
                                return ''
                            }
                            return <AboutDamages key={k} name={k} data={url[k]} />
                        })
                    }
                </div>
            </div>
    )
}

 // useEffect(()=>{
    //     const element = document.getElementById('typeContainer').children
    //     if( toShow === Number(element[toShow].id)){
    //         element[toShow].classList.add('selected')
    //     }
       
    // },[])

    
    
    // !loading && console.log(state);
