import React from 'react'
import './index.css'

export const Card = ({ info }) => {

    return (
        <div className='cardContainer'>
            <div className='card'>
                <div className='cardHeader'>
                    {info.heading}
                </div>

                <div className='cardContent'>
                    
                    {info.componentOne}

                    {info.componentTwo}
                </div>

                <button className='submitButton'>Submit</button>
            </div>
        </div>
    )
}
