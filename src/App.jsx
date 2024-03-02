import React from 'react'
import { NavBar } from "./components/NavBar/NavBar"
import { Fab } from "./components/Fab/Fab"
import { useState } from "react"
import { FabMenu } from './components/FabMenu/FabMenu'

export const App = () => {

  const [isOpen, setIsOpen] = useState(false)

    const handelClick = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
      <NavBar />

      <div className='mainScreen'>
        <Fab handelClick={handelClick} isOpen={isOpen}/>

      {
        isOpen &&
        <FabMenu />
      }
      </div>
    </>
  )
}
