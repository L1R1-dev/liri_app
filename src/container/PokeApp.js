import React, { useEffect, useMemo, useState } from 'react'

import GlobalState from '../contextApi/GlobalState'


import SearchBar from '../components/pokeApp/searchBar/SearchBar'
import Comparaison from '../components/pokeApp/comparaison/Comparaison'
import GetPokeSpecies from '../data/GetPokeSpecies'




export default function PokeApp() {


    
    return (
        <div className='pokeApp'>
            <GlobalState>
                <GetPokeSpecies />
                <Comparaison />

            </GlobalState>
            
            

        </div>
    )
}
