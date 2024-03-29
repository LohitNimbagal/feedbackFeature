import React from 'react'
import { useState } from 'react'
import './index.css'
import {TextInput} from '../ui/TextInput'


export const SuggestionCard = ({loggedIn, handelSubmit }) => {

    const options=['Concept Card', 'Interview Questions', 'Practice questions', 'Quizzes', 'Others']

    const [text, setText] = useState(null)

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div className='cardContainer'>
            <div className='card'>
                <div className='cardHeader'>
                    Share your <span className='headerBold'>Suggestion</span> with us  <br /> for a chance to earn rewards!
                </div>

                <div className='cardContent'>
                    <div className='topSection'>
                        <label htmlFor="" className='selectLabel'>Choose a section</label>

                        <select className='selectSection' name="issues" id="issues">
                            {
                                options.map((item) => (
                                    <option value={item} key={item}>{item}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className='bottomSection'>
                        <label htmlFor="">
                            Describe the Suggestion in detail
                        </label>

                        <div className='textSection'>
                            <textarea type="text" placeholder='Write here...' onChange={handleChange}/>
                            <div className='attachButton'>
                                <svg width="74" height="74" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.4995 6.7478V17.3278C16.4995 19.4178 14.9695 21.2778 12.8895 21.4778C12.3339 21.5333 11.7727 21.4717 11.2424 21.2968C10.712 21.122 10.2243 20.8379 9.81055 20.4628C9.39684 20.0878 9.0664 19.6301 8.84058 19.1194C8.61475 18.6086 8.49856 18.0562 8.49951 17.4978V5.1378C8.49951 3.8278 9.43951 2.6378 10.7395 2.5078C11.0881 2.47134 11.4406 2.50861 11.7738 2.61718C12.1071 2.72576 12.4139 2.90321 12.6742 3.13802C12.9344 3.37282 13.1424 3.65974 13.2846 3.98014C13.4268 4.30054 13.5 4.64726 13.4995 4.9978V15.4978C13.4995 16.0478 13.0495 16.4978 12.4995 16.4978C11.9495 16.4978 11.4995 16.0478 11.4995 15.4978V6.7478C11.4995 6.3378 11.1595 5.9978 10.7495 5.9978C10.3395 5.9978 9.99951 6.3378 9.99951 6.7478V15.3578C9.99951 16.6678 10.9395 17.8578 12.2395 17.9878C12.5881 18.0243 12.9406 17.987 13.2738 17.8784C13.6071 17.7698 13.9139 17.5924 14.1742 17.3576C14.4344 17.1228 14.6424 16.8359 14.7846 16.5155C14.9268 16.1951 15 15.8483 14.9995 15.4978V5.1678C14.9995 3.0778 13.4695 1.2178 11.3895 1.0178C10.834 0.96307 10.2732 1.02527 9.7432 1.20039C9.2132 1.37551 8.72574 1.65968 8.3122 2.03459C7.89866 2.40951 7.56821 2.86687 7.34213 3.37722C7.11605 3.88757 6.99934 4.43961 6.99951 4.9978V17.2678C6.99951 20.1378 9.09951 22.7078 11.9595 22.9778C15.2495 23.2778 17.9995 20.7178 17.9995 17.4978V6.7478C17.9995 6.3378 17.6595 5.9978 17.2495 5.9978C16.8395 5.9978 16.4995 6.3378 16.4995 6.7478Z" fill="#333333" />
                                </svg>
                                <input type="file" />
                            </div>
                        </div>
                    </div>

                    {!loggedIn &&
                        <TextInput label={'Your Email'} type={'email'} />
                    }
                </div>

                <button className={`submitButton ${text?.length > 0 ? 'enable' : 'disabled'}`} onClick={handelSubmit} disabled={text?.length === 0}>Submit</button>

            </div>
        </div>
    )
}
