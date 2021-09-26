import React, { createContext, useMemo, useReducer } from 'react'

export const UpperComparaison = createContext()

const init = {
    0:null,
    1:null
}

function reducer(state,action){
    switch(action.type){
        case 'ADD' : 
            if(state[0] === null) {
                return {
                    ...state,
                    0: action.payload,
                }
            } else {
                return {
                    ...state,
                    1: action.payload   
                }
            }
        case 'DELETE' :
            return {
                ...state,
                [action.payload] : null,
            }
        case 'INIT':
            return {
                init
            }
        default:
            throw new Error('error')
    }
}

const GlobalStateComparaison = ({ children }) => {
    const [state,dispatch] = useReducer(reducer,init)
    const valComp = useMemo(()=>{
        return {
            state,
            dispatch
        }
    },[state])
    
    return (
        <UpperComparaison.Provider value={valComp}>
            {/* 
                {
                    JSON.stringify(state[0].pokemon)
                }
            */}

            {
                children
            }
        </UpperComparaison.Provider>
    )
}

export default GlobalStateComparaison