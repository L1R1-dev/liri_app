import React, { useContext, useEffect } from 'react'
import { UpperComparaison } from '../../../contextApi/GlobalStateComparaison'
import '../../../css/comparaison.css'
import Card from './Card'

export default function Comparaison({ toggle, setToggle }) {
    const valComp = useContext(UpperComparaison)
    const stateOfValComp = valComp.state
        
    const elem1 = stateOfValComp[0]
    const elem2 = stateOfValComp[1]
    const position = toggle ? 'attack' : 'defense'
    const position2 = toggle ? 'defense' : 'attack'
    const emptyState = elem1 === null && elem2 === null

    useEffect(()=>{
        setToggle(true)
    },[emptyState, setToggle])

    return (
        <div className='comparaison' >
                <div className='left-side' >
                    {
                        elem1!== null ? <Card key={ elem1.langName } dataCard={ elem1 } position={position} /> : ''
                    }
                </div>
            
                <div className='right-side' >               
                    {
                        elem2!== null ? <Card key={ elem2.langName } dataCard={ elem2 } position={position2} /> : ''
                    }
                </div>
        </div>
    )
}
