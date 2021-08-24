import React from 'react'

export default function TypeContainer({children}) {
    console.log(children);
    return (
        <div>
            {
                children
            }
        </div>
    )
}
