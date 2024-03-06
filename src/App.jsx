import React from 'react'
import { NavBar } from "./components/NavBar/NavBar"
import { Fab } from "./components/Fab/Fab"
import { useState } from "react"
import { FabMenu } from './components/FabMenu/FabMenu'
import { CardComp } from './components/Card/CardComp'
import { Notification } from './components/Notification/Notification'


export const App = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [toDown, setToDown] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [openCard, setOpenCard] = useState(null)
  const [showNote, setshowNote] = useState(false)

  const handelClick = () => {
    setIsOpen(!isOpen)
    setOpenCard(null)
    setToDown(false)
  }

  const handelLogin = () => {
    setLoggedIn(!loggedIn)
  }

  const handelSubmit = () => {
    setshowNote(true)
    setToDown(false)
    setIsOpen(false)
  }

  if (showNote) {
    setTimeout(() => {
      setshowNote(false)
      setOpenCard(null)
    }, 1000);
  }

  return (
    <>
      <NavBar />

      <div className='mainScreen'>

        <button className='loginButton' onClick={handelLogin}>{loggedIn ? 'LogOut' : 'LogIn'}</button>

        <div className='rightCorner'>

          <div className='buttons' style={{ flexDirection: toDown && 'row' }}>

            <div className='fabButton' >
              <Fab handelClick={handelClick} isOpen={isOpen} setToDown={setToDown} toDown={toDown} />
            </div>

            <div className='menuButtons'>
              {
                isOpen &&
                <FabMenu setOpenCard={setOpenCard} openCard={openCard} toDown={toDown} setToDown={setToDown} />
              }
            </div>

            {
              showNote && <Notification openCard={openCard} />
            }

          </div>

          <div className='cardComponent'>
            {!showNote &&
              <CardComp loggedIn={loggedIn} openCard={openCard} handelSubmit={handelSubmit} showNote={showNote} />
            }
          </div>
        </div>
      </div>
    </>
  )
}
