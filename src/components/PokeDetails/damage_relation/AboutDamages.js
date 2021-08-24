import React from 'react'


import '../../../css/aboutDamages.css'

import AboutDamagesRows from './AboutDamagesRows'

export default function AboutDamages({name,data}) {
    const damageName = name.includes('double_damage') ? 'tres efficace' : name.includes('half_damage') ? 'pas tres efficace': name.includes('no_damage') && 'aucun degat'
    const rows = data.map(d=>{
        return <AboutDamagesRows key={d.name} url={d.url} />
    })
    return (
            <div className='aboutDamages'>
                <span>
                    {
                        data.length !== 0 && damageName
                    }
                </span>
                <ul id={name} className='damageRows'>
                    {
                        rows
                    }
                </ul>
            </div>
    )
}
