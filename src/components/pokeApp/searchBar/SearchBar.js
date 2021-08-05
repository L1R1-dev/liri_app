import React, { useContext, useEffect, useRef, useState } from 'react'
import { UpperState } from '../../../contextApi/GlobalState'

import PokeContainer from './PokeContainer'

export default function SearchBar() {
    const [filterText,setFilterText] = useState('')
    const input = useRef('')
    function handleChange(e) {
        setFilterText(e.target.value)
    }
    useEffect(()=>{
        input.current = filterText
        
    },[filterText])
    return (
        <div className='SearchBar'>
            <input type="text" name="" id="SearchInput" placeholder='Pokemons...' onChange={handleChange} value={filterText} />
                <PokeContainer filterText={input.current}  />
        </div>

    )
}
