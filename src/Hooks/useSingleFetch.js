import React, { useEffect, useState } from 'react'

export default function useSingleFetch(url) {
    const [error] = useState({
        error:[]
    })
    const [loading,setLoading] = useState(true)
    const [data,setData] = useState({
        data:[]
    })
    useEffect(()=>{
        (async function(){
            const response = await fetch(url)
            const responseData = await response.json()
            if(response.ok){
                setData({
                    data: responseData
                })
                setLoading(false)
            }   

        })()
    },[url])
    return [
        loading,
        data.data,
        error.error,
    ]
}
