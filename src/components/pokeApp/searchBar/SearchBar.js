import React, { useState } from 'react'


import PokeContainer from './PokeContainer'

export default function SearchBar() {
    const [filterText,setFilterText] = useState('')
    
    function handleChange(e) {
        setFilterText(e.target.value)
    }
    
    return (
        <div className='SearchBar'>
            <input type="text" name="" id="SearchInput" placeholder='Pokemons...' onChange={handleChange} value={filterText} />
                <PokeContainer filterText={filterText}  />
        </div>

    )
}
