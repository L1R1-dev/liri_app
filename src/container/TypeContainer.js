import React from 'react'

export default function TypeContainer({children}) {
    console.log(children);
    return (
        <div className='type-container'>
            {
                children
            }
        </div>
    )
}
