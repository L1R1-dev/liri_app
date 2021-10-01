import { useEffect, useState } from 'react'

export default function useSingleFetch(url) {
    const [error] = useState([])
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        (async function(){
            const response = await fetch(url)
            const responseData = await response.json()
            if(response.ok){
                setData(responseData)
                setLoading(false)
            }   
            
        })() 
        return () =>{
            setData([])
            setLoading(true)    
        }
    },[url])
    return [
        loading,
        data,
        error,
    ]
     
}
