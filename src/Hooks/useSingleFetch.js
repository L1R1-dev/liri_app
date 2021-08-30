import { useEffect, useState } from 'react'

export default function useSingleFetch(url) {
    const [error,setError] = useState({
        error:[]
    })
    const [loading,setLoading] = useState(true)
    const [data,setData] = useState({
        data:[]
    })

    useEffect(()=>{
        url !== null ? (async function(){
            const response = await fetch(url)
            const responseData = await response.json()
            if(response.ok){
                setData({
                    data: responseData
                })
                setLoading(false)
            }   
            
        })() : (
            setLoading(true)
            
        )
        return () => {
            setError({
                error:[]
            })
            setData({
                data:[]
            })
            setLoading(true)
        }
    },[url])

    if(url !== null){
        
        return [
            loading,
            data.data,
            error.error,
        ]
    } else {
        return 
    }
}
