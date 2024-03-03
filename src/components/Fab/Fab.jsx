import React, { useState } from 'react'
import './index.css'

export const Fab = ({handelClick, isOpen, toDown}) => {

    return (
        <>
            <div className='fabContainer' onClick={handelClick} style={{bottom: !toDown && '32px' }}>
                {isOpen ?

                    <svg className='close' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 10.0012L30 30.0006M10 30.0006L30 10.0012" stroke="#0F0F0F" strokeWidth="3.99994" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    :
                    <svg className='fab' width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_2652_6396)">
                            <path d="M19.7452 0H2.32296C1.04002 0 0 1.04002 0 2.32296V27.8755C0 29.1584 1.04002 30.1984 2.32296 30.1984H19.7452C21.0281 30.1984 22.0682 29.1584 22.0682 27.8755V2.32296C22.0682 1.04002 21.0281 0 19.7452 0Z" fill="#0F0F0F" />
                            <path d="M3.48444 6.96924L17.4222 6.96924" stroke="#F8F8F8" strokeWidth="1.74222" strokeLinecap="round" />
                            <path d="M3.48444 11.6147L17.4222 11.6147" stroke="#F8F8F8" strokeWidth="1.74222" strokeLinecap="round" />
                            <path d="M3.48444 16.2607L17.4222 16.2607" stroke="#F8F8F8" strokeWidth="1.74222" strokeLinecap="round" />
                            <path d="M3.48444 20.9067H10.4533" stroke="#F8F8F8" strokeWidth="1.74222" strokeLinecap="round" />
                            <path d="M25.2995 13.6118L16.5793 28.7155L16.9482 33.0538C17.0167 33.8594 17.8669 34.3503 18.5989 34.0068L22.5404 32.1571L31.2606 17.0535C31.902 15.9424 31.5214 14.5217 30.4103 13.8803L28.4727 12.7616C27.3616 12.1201 25.9409 12.5008 25.2995 13.6118Z" fill="#0F0F0F" stroke="#F8F8F8" strokeWidth="1.16148" strokeLinecap="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2652_6396">
                                <rect width="32" height="34" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                }
            </div>
        </>
    )
}
