import { useEffect, useState } from 'react'

export default function useMultiFetch(urls) {
    const [multiError,setMultiError] = useState({
        error:[]
    })
    const [multiDatas,setMultiDatas] = useState({
        data:[]
    })
    const [multiLoading,setMultiLoading] = useState(true)
    
    useEffect(()=>{
        (async function(){
            const promise = await Promise.all( urls.map( u=> fetch(u)) )
            const response = await Promise.all( promise.map( p=> p.json()))
            
            
                setMultiDatas(s=>({
                    ...s.data,
                    data: response
                }))

                setMultiLoading(false)
        })()
        return () => {
            setMultiError({
                error:[]
            })
            setMultiDatas({
                data:[]
            })
            setMultiLoading(true)
        }
    },[urls])
    
    
   
    return [
        multiLoading,
        multiDatas.data,
        multiError.error,
    ]
}
