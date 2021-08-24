import React, { useEffect, useState } from 'react'
import useSingleFetch from '../../Hooks/useSingleFetch'
import AboutDamages from './damage_relation/AboutDamages'
import '../../css/type.css'


export default function Type({ url, position }) {
    const [loading,data,] = useSingleFetch(url)
    const [keys,setKeys] = useState([])
    let name = ''
    !loading && data.names.map(d=>{
       
        if(d.language.name === 'fr'){
            return name = d.name
        }
        return  ''
    });

    useEffect(()=>{
        if(!loading) {
            for(const key of Object.keys(data.damage_relations)){
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
    },[data.damage_relations, loading, position])

    

    
    // !loading && console.log(state);
    return (

            <div id={name} className='typeOfPokemon' >
                <span>{name}</span>
                <div className='type'>
                    {
                        keys.map(k=>{
                            // console.log(data.damage_relations[k].length);
                            if(data.damage_relations[k].length === 0){
                                return ''
                            }
                            return <AboutDamages key={k} name={k} data={data.damage_relations[k]} />
                        })
                    }
                </div>
            </div>



    )
}
