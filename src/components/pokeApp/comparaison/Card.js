import React, { useContext, useEffect, useState } from 'react'
import { UpperComparaison } from '../../../contextApi/GlobalStateComparaison'
import useSingleFetch from '../../../Hooks/useSingleFetch'
import Type from '../../PokeDetails/Type'
import '../../../css/card.css'
import '../../../css/card.css'
import TypeContainer from '../../../container/TypeContainer'

export default function Card({ dataCard, position }) {
    // VARIABLE ABOUT DATA
    const [loading,data,] = useSingleFetch(dataCard.pokemon)
    
    // VARIABLE ABOUT STATE OF COMPARAISON
    const valComp = useContext(UpperComparaison)
    const stateOfValComp = valComp.state

    // VARIABLE ABOUT TYPE OF THIS CARD
    const [types,setTypes] = useState([])
    
    // VARIABLE ABOUT CLASS OF THIS CARD
    const isBaby = dataCard['is_baby'] && 'baby'
    const isLegendary = dataCard['is_legendary'] && 'legendary'
    const isMythical = dataCard['is_mythical'] && 'mythical'
    const isNormal = !isBaby && !isLegendary && !isMythical && 'normal'

    // VARIABLE TO KNOW HOW MUCH TYPE IN CARD
    const typeLength = !loading && data.types.length
    
    // !loading && console.log(dataCard.langName)
    useEffect(()=>{
        !loading && data.types.forEach((d,i)=>{
            setTypes(s=>[
                ...s,
                <Type key={d.type.name} url={d.type.url} position={position} />
            ])
        });
        
        return () =>{
            setTypes([])
        }
    },[data.types, loading, position])
    // !loading && types.length!==0 && console.log(types);
    
    
    // ABOUT CROSS click
    function handleClick(e){
        
        for(const [key,value] of Object.entries(stateOfValComp)){
            if(value !== null && dataCard.id === value.id){
                valComp.dispatch({ type: 'DELETE', payload: Number(key) })
            }
        }
    }

    
    return (
        <div className={`cardContainer ${typeLength === 1 ? 'one':'two'} ${isBaby||isLegendary||isMythical||isNormal}`}>
            <div className={`card  ${position} ` } >
                <div className='header'>
                    <span className='icon'> <i onClick={handleClick}>X</i> </span>

                    {
                        !loading &&  <img src={data.sprites.other['official-artwork']['front_default']} alt="" />
                    }
                    <span className='id'> N° {dataCard.id} </span>
                    <span className='name'> {dataCard.langName} </span>
                    <span className='position'> {position} </span>
                </div>
                <TypeContainer>
                    {
                        !loading && types.length !==0 && types
                    }
                </TypeContainer>
            </div>
        </div>
    )
}
