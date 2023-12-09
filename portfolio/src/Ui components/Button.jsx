import React from 'react'

export default function Button({children}) {
    return (
        <button className='h-10 px-8 bg-myPurple text-white text-sm font-semibold rounded-lg' >
            {children}
        </button>
    )
}
