import React from 'react'
import { NavBar } from "./components/NavBar/NavBar"
import { Fab } from "./components/Fab/Fab"
import { useState } from "react"
import { FabMenu } from './components/FabMenu/FabMenu'
import { Card } from './components/Card/Card'
import { Selection } from './components/ui/Selection/Selection'
import { TextArea } from './components/ui/TextArea/TextArea'

export const App = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [openCard, setOpenCard] = useState(null)

  const handelClick = () => {
    setIsOpen(!isOpen)
    setOpenCard(false)
  }

  return (
    <>
      <NavBar />

      <div className='mainScreen'>
        <Fab handelClick={handelClick} isOpen={isOpen} />

        {
          isOpen &&
          <FabMenu setOpenCard={setOpenCard} openCard={openCard} />
        }

        {
          openCard

          && openCard === 'Report an Issue' &&
          <Card
            info={{
              heading: 'Let us know about the Issue you are facing right now!',
              componentOne:
                <Selection
                  label={'Choose a section'}
                  options={['Concept Card', 'Interview Questions', 'Practice questions', 'Quizzes']}
                />,
              componentTwo:
                <TextArea
                  label={'Describe the issue in detail'}
                />
            }}
          />

          || openCard === 'Share Feedback' &&
          <Card
            info={{
              heading: 'Let us know your Feedback about us !',
              componentOne:
                <TextArea />
            }} />

          || openCard === 'Give Suggestion' &&
          <Card
            info={{
              heading: 'Share your Suggestions with us for a chance to earn rewards!',
              componentOne:
                <Selection
                  label={'Choose a section'}
                  options={['Concept Card', 'Interview Questions', 'Practice questions', 'Quizzes']}
                />,
              componentTwo:
                <TextArea
                  label={'Describe the suggestion in detail'}
                />
            }}
          />

          || openCard === 'Contact Us' &&
          <Card
            info={{
              heading: 'Get in Contact with us for your queries!',
              componentOne:
                <>
                  <label>Your Name</label>
                  <input type='text'/>
                </>,
              componentTwo:
              <TextArea
                label={'What would you like to ask'}
              />
            }}
          />
        }
      </div>
    </>
  )
}
