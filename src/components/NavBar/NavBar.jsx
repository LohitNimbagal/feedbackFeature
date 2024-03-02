import React from 'react'
import './index.css'

export const NavBar = () => {
  return (
    <>
      <div className='navBar'>
        <div className='logo'>
          THE <span className='logoHighlight'>PRODUCT</span> PLATFORM
        </div>

        <div>
          <ul className='navContent'>
            <li>Learn</li>
            <li>Practice</li>
            <li><div className='userImg'></div></li>
          </ul>
        </div>
      </div>
    </>
  )
}
