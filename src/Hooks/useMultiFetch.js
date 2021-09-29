import { useEffect, useState } from 'react'

export default function useMultiFetch(urls) {
    const [ state, setState ] = useState({
        error:[],
        data:[],
        loading: true

    })
    
    
     useEffect(()=>{
        urls !== false && (async function(){
            
            const promise = await Promise.all( urls.map( u=> fetch(u)) )
            const response = await Promise.all( promise.map( p=> p.json()))
            setState(s=>({
                ...s,
                data: response,
                loading: !s.loading
            }))

        })()
         
        return () => {
            setState({
                error:[],
                data: [],
                loading: true
            })
        }

    },[urls])
    return [
        state.loading,
        state.data,
        state.error,
    ]
    
    
}








// useEffect(()=>{
    //     (async function(){
    //         const promise = await Promise.all( urls.map( u=> u !== null && fetch(u)) )
    //         const response = await Promise.all( promise.map( p=> p.json()))


    //             setMultiDatas(s=>({
    //                 ...s.data,
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
