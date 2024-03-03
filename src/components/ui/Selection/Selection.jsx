import React from 'react'
import './index.css'

export const Selection = ({ label, options }) => {

    return (
        <div className='topSection'>
            <label htmlFor="" className='selectLabel'>{label}</label>

            <select className='selectSection' name="issues" id="issues">
                {
                    options.map((item) => (
                        <option value={item} key={item}>{item}</option>
                    ))
                }
            </select>
        </div>
    )
}
