import React, { useContext } from 'react'
import './Page.css'
import { ValuesContext } from './ValuesContext' 
import { useNavigate } from 'react-router-dom';
import InputButton from '../components/InputButton'

function CommSkills() {
  const { values, setValues } = useContext(ValuesContext);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setValues(prevValues => ({
      ...prevValues,
      communication_skills: event.target.value,
    }));
  };

  const handleNext = () => {
    navigate("/datascience");
  };

  return (
    <>
    <div className="Content">
      <div className='topic'>
      Communication Skills
        <p className='desc'>
        Communication Skills is the ability to effectively communicate information, ideas, and messages to people through a variety of methods. It includes not just spoken words but also written ones, nonverbal clues, and active listening. The ability to communicate clearly, succinctly, and articulately requires changing one's communication style to diverse audiences and utilizing the proper vocabulary and tone. It also entails abilities in nonverbal communication, empathy, and active listening. Building relationships, cooperating successfully, persuading others, and conveying information in a clear and persuasive way are all made possible by excellent communication skills, which promote understanding and participation in both personal and professional situations.
        </p>
        <InputButton
            number={values.communication_skills || 0} // Pass the value from the context state as the 'number' prop
            onIncrement={() => {
              if (values.communication_skills < 10) {
                handleInputChange({ target: { value: parseInt(values.communication_skills || 0) + 1 } });
              }
            }}
            onDecrement={() => {
              if (values.communication_skills > 0) {
                handleInputChange({ target: { value: parseInt(values.communication_skills || 0) - 1 } });
              }
            }}
          />
          <button className="next-button" onClick={handleNext}>Next</button>
      </div>
    </div>
    </>
  )
}

export default CommSkills