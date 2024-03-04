import React from 'react'

export const TextInput = ({label, type}) => {
    return (
        <div className='topSection'>
            <label htmlFor="" className='selectLabel'>{label}</label>

            <input className='selectSection' type={type} />
        </div>
    )
}
