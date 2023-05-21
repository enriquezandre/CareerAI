import React, { useContext } from 'react'
import './Page.css'
import { ValuesContext } from './ValuesContext' 
import { useAutoFocus } from '../components/useAutoFocus';
import { NextButton } from '../components/NextButton';

function CommSkills() {
  const { values, setValues } = useContext(ValuesContext);
  const autoFocusRef = useAutoFocus();

  const handleInputChange = (event) => {
    setValues(prevValues => ({
      ...prevValues,
      communication_skills: event.target.value,
    }));
  };
  return (
    <>
    <div className="Content">
      <div className='topic'>
      Communication Skills
        <p className='desc'>
          Communication Skills is the ability to effectively communicate information, ideas, and messages to people through a variety of methods. It includes not just spoken words but also written ones, nonverbal clues, and active listening. The ability to communicate clearly, succinctly, and articulately requires changing one's communication style to diverse audiences and utilizing the proper vocabulary and tone. It also entails abilities in nonverbal communication, empathy, and active listening. Building relationships, cooperating successfully, persuading others, and conveying information in a clear and persuasive way are all made possible by excellent communication skills, which promote understanding and participation in both personal and professional situations.
          <div className='rating'>
            <input
              type="number"
              ref={autoFocusRef}
              value={values.communication_skills || ''} // Read the value from the context state
              onChange={handleInputChange}
              className="input-field"
              placeholder="Enter rate here"
            />
          </div>
          <div className='next'>
            <NextButton link = "/datascience"></NextButton>
          </div>
        </p>
      </div>
    </div>
    </>
  )
}

export default CommSkills