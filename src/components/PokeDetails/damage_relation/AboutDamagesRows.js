import React, { useEffect } from 'react'
import useSingleFetch from '../../../Hooks/useSingleFetch'
import '../../../css/aboutDamagesRows.css'

export default function AboutDamagesRows({url}) {
    const [loading,data,] = useSingleFetch(url)
   
    const typeRows = !loading && data.names.map(d=>{

        if(d.language.name === 'fr'){
            return d.name
        }
        return ''
    })

    

    return (
        <li className='damage'>
            {
                typeRows
            }
        </li>
    )
}
