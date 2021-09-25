import React, { useContext, useEffect, useState } from 'react'
import { UpperComparaison } from '../../../contextApi/GlobalStateComparaison'
import useSingleFetch from '../../../Hooks/useSingleFetch'
import useMultiFetch from '../../../Hooks/useMultiFetch'
import Type from '../../PokeDetails/Type'
import '../../../css/card.css'
import '../../../css/card.css'


import Image1Svg from '../../../picture/Image1Svg'
// import test from '../../../picture/test.svg'
import multi2 from '../../../picture/images2.jpeg'
import bug from '../../../picture/bug.jpeg'
import dark from '../../../picture/dark.jpeg'
import dragon from '../../../picture/dragon.jpeg'
import electric from '../../../picture/electric.jpeg'
import fairy from '../../../picture/fairy.jpeg'
import fighting from '../../../picture/fighting.jpeg'
import flying from '../../../picture/flying.jpeg'
import ground from '../../../picture/ground.jpeg'
import normal from '../../../picture/normal.jpeg'
import poison from '../../../picture/poison.jpeg'
import psychic from '../../../picture/psychic.jpeg'

export default function Card({ dataCard, dataNext, position }) {
    // VARIABLE ABOUT DATA
    const [loading,data,] = useSingleFetch(dataCard.pokemon) 
    // const [ multiLoading, multiData, ] = useMultiFetch(data.type)
    const [state,setState] = useState({
        dataDetail:[]
    })
    const [loading2, data2,] = useMultiFetch(state.dataDetail)
    // !loading2 && console.log(data2);
    
    // VARIABLE ABOUT TYPE OF THIS CARD
    const [types,setTypes] = useState([])
    
    // VARIABLE ABOUT STATE OF COMPARAISON
    const valComp = useContext(UpperComparaison)
    const stateOfValComp = valComp.state    
    const [toShow, setToShow] = useState(0) 
    
    // VARIABLE ABOUT CLASS OF THIS CARD
    const isBaby = dataCard['is_baby'] && 'baby'
    const isLegendary = dataCard['is_legendary'] && 'legendary'
    const isMythical = dataCard['is_mythical'] && 'mythical'
    const isNormal = !isBaby && !isLegendary && !isMythical && 'normal'
    const firstType = !loading && data.types[0].type.name
    
    // VARIABLE TO KNOW HOW MUCH TYPE IN CARD
    const typeLength = !loading && data.types.length
    console.log( (data && data.length !== 0) && data )
    const typeName = !loading2 && data2.map((d,i)=>{
        return d.names.map(n=>{
            if(n.language.name==='fr'){
                return <span key={i} id={i} className={`typeName ${ toShow === i ? 'selected': 'unselected'}`} onClick={handleclickType} >{n.name}</span>
            } else {
                return null
            }
        })
    }).map( ds=> {
        return ds.filter(e=>{
            return e !== null
        })
    })
    
    useEffect(()=>{
        dataNext !== undefined && dataNext.types.forEach(t=>{
            setState(s=>({
                dataDetail: [
                    ...s.dataDetail,
                    t.type.url
                ]
            }))
        })
        return ()=>{
            // console.log('render')
            setState({
                dataDetail:[]
            })
        }
    },[dataNext])

    useEffect(()=>{
        const {name, id , damage_relations} =  data2[toShow] !== undefined && data2[toShow]
        setTypes([
            <Type 
                key={`type-${name}`} 
                id={id} 
                url={damage_relations}
                toShow={toShow}
                position={position} 
            />
        ])
        return ()=>{
            setTypes([])
        }
    },[data2, position, toShow])

    // ABOUT CROSS click
    function handleClickX(e){
        for(const [key,value] of Object.entries(stateOfValComp)){
            if(value !== null && dataCard.id === value.id){
                valComp.dispatch({ type: 'DELETE', payload: Number(key) })
            }
        }
    }
    function handleclickType(e){
        setToShow(Number(e.target.id))
    }
    const background = (type) =>{
        if(type === 'ice'){
            // return <img  className='background' src={test} alt=""  />
            return <Image1Svg  />
        }
        if(type === 'fire' || type === 'grass' || type === 'water') {
            return <img  className='background' src={multi2} alt=""  />
        }
        if(type === 'bug'){
            return <img  className='background' src={bug} alt=""  />
        }
        if( type === 'dark' ){
            return <img className='background' src={dark} alt="" />
        }
        if( type === 'dragon' ){
            return <img className='background' src={dragon} alt="" />
        }
        if( type === 'electric' ){
            return <img className='background' src={electric} alt="" />
        }
        if( type === 'fairy' ){
            return <img className='background' src={fairy} alt="" />
        }
        if( type === 'fighting' ){
            return <img className='background' src={fighting} alt="" />
        }
        if( type === 'flying' ){
            return <img className='background' src={flying} alt="" />
        }
        if( type === 'ground' ){
            return <img className='background' src={ground} alt="" />
        }
        if( type === 'normal' ){
            return <img className='background' src={normal} alt="" />
        }
        if( type === 'poison' ){
            return <img className='background' src={poison} alt="" />
        }
        if( type === 'psychic' ){
            return <img className='background' src={psychic} alt="" />
        }
    }
    
    
    return (
        <div className={`cardContainer ${typeLength === 1 ? 'one':'two'} ${isBaby||isLegendary||isMythical||isNormal} ${firstType}` } >
            <div className={`card  ${position} ` }  >
                <div className='header'>
                    <span className='icon'> <i onClick={handleClickX}>X</i> </span>

                    {
                        !loading &&  <img src={data.sprites.other['official-artwork']['front_default']} alt="" />
                    }
                    <span className='id'> N° {dataCard.id} </span>
                    <span className='name'> {dataCard.langName} </span>
                    <span className='position'> {position} </span>
                </div>
                {/* {
                    console.log(types)
                } */}
                <div id='typeNameContainer'>
                    {
                        typeName
                    }
                </div>
                <div id='typeContainer' >
                    {
                        types
                    }
                </div>
            </div>
            
            {
                background(firstType)
            }

        </div>
    )
}




// !loading && console.log(dataCard.langName)
    // useEffect(()=>{
    //     !loading && data.types.forEach((d,i)=>{
    //         setTypes(s=>[
    //             ...s,
    //             <Type 
    //                 key={d.type.name} 
    //                 id={i} 
    //                 url={d.type.url}
    //                 position={position} 
    //                 />
    //         ])
    //     });
        
    //     return () =>{
    //         console.log('render');
    //         setTypes([])
    //     }
    // },[])
    // !loading && types.length!==0 && console.log(types);