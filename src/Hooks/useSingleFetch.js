import { useEffect, useState } from 'react'

export default function useSingleFetch(url) {
    const [state,setState] = useState({
        data:[],
        loading: true,
        error:[],
    })
    useEffect(()=>{
        (async function(){
            const response = await fetch(url)
            const responseData = await response.json()
            if(response.ok){
                setState(s=>({
                    ...s,
                    loading:false,
                    data: responseData
                }))
            }   
            
        })() 
    },[url])
    
    return [
        state.loading,
        state.data,
        state.error,
    ]
     
}
