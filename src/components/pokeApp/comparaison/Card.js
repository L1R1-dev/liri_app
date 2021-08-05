import React from 'react'
import useSingleFetch from '../../../Hooks/useSingleFetch'

export default function Card({url}) {
    const [loading,data,error] = useSingleFetch(url)

    return (
        <div>
            
        </div>
    )
}
