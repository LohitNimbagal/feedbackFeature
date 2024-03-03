import React from 'react'
import { NavBar } from "./components/NavBar/NavBar"
import { Fab } from "./components/Fab/Fab"
import { useState } from "react"
import { FabMenu } from './components/FabMenu/FabMenu'
import {IssueCard} from './components/Card/IssueCard'
import {FeedbackCard} from './components/Card/FeedbackCard'
import {SuggestionCard} from './components/Card/SuggestionCard'
import {ContactCard} from './components/Card/ContactCard'

export const App = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [toDown, setToDown] = useState(false)
  const [openCard, setOpenCard] = useState(null)

  const handelClick = () => {
    setIsOpen(!isOpen)
    setOpenCard(false)
    setToDown(false)
  }

  return (
    <>
      <NavBar />

      <div className='mainScreen'>
        <Fab handelClick={handelClick} isOpen={isOpen} setToDown={setToDown} toDown={toDown}/>

        {
          isOpen &&
          <FabMenu setOpenCard={setOpenCard} openCard={openCard} toDown={toDown} setToDown={setToDown}/>
        }

        {openCard && openCard === 'Report an Issue' && <IssueCard />

          || openCard === 'Share Feedback' && <FeedbackCard />
          
          || openCard === 'Give Suggestion' && <SuggestionCard />

          || openCard === 'Contact Us' && <ContactCard />
        }
      </div>
    </>
  )
}
