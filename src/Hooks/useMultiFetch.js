import { useEffect, useState } from 'react'

export default function useMultiFetch(urls) {
    const [error] = useState([])
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(true)
    
    // console.log(urls);

    useEffect(()=>{
        (async function(){
            
            const promise = await Promise.all(Array.from(urls).map( u=> fetch(u) ))
            const response = await Promise.all( promise.map( p=> p.json()))
    
            setData(response)
            setLoading(false)
            
        })()
        
        return () => {
            setData([])
            setLoading(true)
            
        }

    },[urls])
    return [
        loading,
        data,
        error,
    ]
    
    
}








// useEffect(()=>{
    //     (async function(){
    //         const promise = await Promise.all( urls.map( u=> u !== null && fetch(u)) )
    //         const response = await Promise.all( promise.map( p=> p.json()))


    //             setMultiDatas(s=>({
    //                 ...s.data,q
    //                 data: response
    //             }))

    //             setMultiLoading(false)
    //     })()
    //     return () => {
    //         setMultiError({
    //             error:[]
    //         })
    //         setMultiDatas({
    //             data:[]
    //         })
    //         setMultiLoading(true)
    //     }
    // },[urls])
