import React, { useContext, useEffect, useMemo, useState } from 'react'
import { UpperPoke } from '../../../contextApi/GlobalState';
import PokeRow from './PokeRow'

import '../../../css/pokeContainer.css'

export default function PokeContainer({ filterText, onClosing }) {
    const dataPoke = useContext(UpperPoke)
    const [listRows, setListRows] = useState([])
    const pokemons = useMemo(()=>{
        return [...dataPoke]
    },[dataPoke]) 
    console.log(dataPoke === pokemons)
    const limit = filterText.length >2
    const style = {
        display: !limit && 'none'
    }
    
    useEffect( () => {
        pokemons.length!==0 &&  Array.from(pokemons).forEach( (c,i)=>{
            if(c.langName.indexOf(filterText) === -1){
                return
            } else {
                setListRows(s=>([
                    ...s,
                    <PokeRow key={c.langName} data={c}/>,
                ]))
            }
        })
        return ()=>{
            setListRows([])
        }
    },[filterText, pokemons])
    
    return (
        <div id='border-pokeContainer' style={style}  >
            <ul id='pokeContainer'className='' >
                {
                    !onClosing && limit && listRows
                    // listRows
                }
            </ul>
        </div>
    )
}
