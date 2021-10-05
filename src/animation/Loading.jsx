import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const VISIBLE = 1
const HIDDEN = 2
const ENTERING = 3
const LEAVING = 4
export function Loading ({ 
    loading,
    duration = 4000, 
    // children,
    lettres, 
    animateEnter = false ,
    // from={
    //     transform: 'scale(1)'
    // }
}) {
        
    const childRef = useRef(lettres)
    const [state, setState] = useState( loading ? ( animateEnter ? ENTERING : VISIBLE ) : HIDDEN)

    if(loading){
        childRef.current = lettres
    }
    
    useEffect(()=>{
        if(!loading){
            setState(LEAVING)
        } else {
            setState(s=> s === HIDDEN ? ENTERING : VISIBLE)
        }
    },[loading])
    useEffect(()=>{
        if (state === LEAVING){
            // const timer = setTimeout(() => {
            //     setState(HIDDEN)
            // }, duration);
            // return () =>{
            //     clearTimeout(timer)
            // }
        } else if ( state === ENTERING){
            // eslint-disable-next-line no-unused-expressions
            document.body.offsetHeight
            setState(VISIBLE)
        }
    },[state])

    if(state === HIDDEN){
        return null
    }
    
    let style = {
        position: 'absolute',
        top:'49%',
        left:'48%',
        animation: `flash ${duration}ms infinite`,
    }

    // if(state !== VISIBLE){
    //     if(from.transform !== undefined){
    //         style.transform = from.transform
    //     }

    //     style.transform = 'scale(1.3)';
    // }
    
    
    let iter = 0
    
    return (
        <div style={{
            position: 'absolute',
            top:'49%',
            left:'48%',
            animation: `breath 8000ms linear infinite`,
            animationDirection: 'alternate'
        }}  > 
            
            {
                childRef.current.map( (l,i) =>{    
                    iter = iter + 0.1
                    return <span key={i} className='lettres' style={{
                        animation: `flash ${duration}ms linear infinite`,
                        animationDelay: `${iter}s`
                    }}> {l} </span>
                })
            }
             
        </div>
    )
}