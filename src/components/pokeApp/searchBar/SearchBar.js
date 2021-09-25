import React from 'react'

import '../../../css/searchbar.css'

import PokeContainer from './PokeContainer'


export default function SearchBar({ filterText, onFilterTextChange, onClosing }) {
    const limit = filterText.length >2

    function handleOnChange(e){
        onFilterTextChange(e.target.value)
    }
    const style = {
        border:( onClosing || !limit) && 'none',
    }

    return (
        <div id='searchbar'>
            <div id='searchbar-container' >
                <div id='input'>
                    <input
                        name=""
                        type="text"
                        id="searchinput"
                        value={filterText}
                        placeholder='Pokemons...'
                        autoComplete='off'
                        onChange={ handleOnChange } />
                </div>
                <div className='separator' style={style}></div>
                {
                    filterText !== undefined && <PokeContainer filterText={filterText} onClosing={onClosing} limit={limit}  />
                }
            </div>
        </div>
    )
}
