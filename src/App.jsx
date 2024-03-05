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
  const [feedback, setFeedBack] = useState(null)
  const [showNote, setshowNote] = useState(false)

  const handelClick = () => {
    setIsOpen(!isOpen)
    setOpenCard(false)
    setToDown(false)
  }

  const handelLogin = () => {
    setLoggedIn(!loggedIn)
  }

  const handelSubmit = () => {
    console.log("submited")
    setOpenCard(false)
    setToDown(false)
    setIsOpen(false)
    setshowNote(true)
  }

  setTimeout(() => {
    setshowNote(false)
  }, 9000);

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
              showNote && <Notification />
            }

          </div>

          <div className='cardComponent'>
            <CardComp loggedIn={loggedIn} openCard={openCard} handelSubmit={handelSubmit} />
          </div>
        </div>
      </div>
    </>
  )
}
