import React from 'react'



export default function Comparaison() {
    
    
    return (
        <div className='Comparaison' style={{display:'grid'}}>
            <div className='attack' style={{border:'1px solid black'}}>
                <div style={{display:'grid', width:'100px', height:'100px'}}>
                    {
                        'card n°1 \n  val.comparaison[0]'
                    }
                </div>
            </div>
            <div className='defense' style={{border:'1px solid black'}}>
                <div style={{display:'grid', width:'100px', height:'100px'}}>

                    {                        
                        'card n°1 \n  val.comparaison[1]'
                    }
                </div>
            </div>
        </div>
    )
}
