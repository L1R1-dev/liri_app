import React, { useContext, useEffect, useState } from 'react'
import { UpperState } from '../../../contextApi/GlobalState'
import Card from './Card'

export default function Comparaison() {
    const val = useContext(UpperState)
    // const [comparaison,setComparaison] = useState([])
    
    
    return (
        <div className='Comparaison' style={{display:'grid'}}>
            <div className='attack' style={{border:'1px solid black'}}>
                <div style={{display:'grid', width:'100px', height:'100px'}}>
                    {
                        
                    }
                </div>
            </div>
            <div className='defence' style={{border:'1px solid black'}}>
                <div style={{display:'grid', width:'100px', height:'100px'}}>
                    {
                        
                    }
                </div>
            </div>
        </div>
    )
}
