import React, { useContext, useEffect, useState } from 'react'
import { UpperComparaison } from '../../../contextApi/GlobalStateComparaison'
import '../../../css/comparaison.css'
import useMultiFetch from '../../../Hooks/useMultiFetch'
import Card from './Card'

export default function Comparaison({ toggle, setToggle }) {
    const valComp = useContext(UpperComparaison)
    const stateOfValComp = valComp.state
    useEffect(()=>{
        stateOfValComp[0] !== null && setState(s=>({
            dataDetail: [
                ...s.dataDetail,
                stateOfValComp[0].pokemon
            ]
        }))
        stateOfValComp[1] !== null && setState(s=>({
            dataDetail: [
                ...s.dataDetail,
                stateOfValComp[1].pokemon
            ]
        }))
        return ()=>{
            // console.log('render')
            setState({
                dataDetail:[]
            })
        }
    },[stateOfValComp])
    
    const [state,setState] = useState({
        dataDetail:[]
    })
    const [ loading, data, ] = useMultiFetch( state.dataDetail.length !== 0 && state.dataDetail )
    
    // const type = !loading && data.map( d =>{
    //     return d.types
    // })
    // const sprites = !loading && data.sprite
    // const id = !loading && data.id
    // const dataShow = !loading && data 
    // console.log(dataShow)
    // console.log(type)
    
    const position = toggle ? 'attack' : 'defense'
    const position2 = toggle ? 'defense' : 'attack'
    const emptyState = stateOfValComp[0] === null && stateOfValComp[1] === null
    
    useEffect(()=>{
        setToggle(true)
    },[emptyState, setToggle])
    
    return (
        <div className='comparaison' >
                <div className='left-side' >
                    {
                        stateOfValComp[0]!== null ? <Card key={ data[0] !== undefined && data[0].name } dataCard={ stateOfValComp[0] } dataNext={data[0]} position={position} /> : ''
                    }
                </div>
            
                <div className='right-side' >               
                    {
                        stateOfValComp[1]!== null ? <Card key={ data[1] !== undefined && data[1].name } dataCard={ stateOfValComp[1] } dataNext={data[1]} position={position2} /> : ''
                    }
                </div>
        </div>
    )
}
