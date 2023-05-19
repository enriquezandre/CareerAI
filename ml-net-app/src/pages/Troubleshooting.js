import React, { useContext } from 'react'
import './Page.css'
import { ValuesContext } from './ValuesContext'
import { useNavigate } from 'react-router-dom';
import InputButton from '../components/InputButton'

function Troubleshooting() {
  const { values, setValues } = useContext(ValuesContext);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setValues(prevValues => ({
      ...prevValues,
      troubleshooting_skills: event.target.value,
    }));
  };

  const handleNext = () => {
    navigate("/graphicsdesigning");
  };
  
  return (
    <>
    <div className="Content">
      <div className='topic'>
        Troubleshooting Skills
        <p className='desc'>
          Troubleshooting skills describes the capacity to recognize, assess, and fix faults or problems in a methodical and effective way. It calls for the application of critical thinking, problem-solving strategies, and technical expertise in a particular field. Logical reasoning, root cause analysis, diagnostic techniques, and the capacity to efficiently use available tools and resources are all components of proficiency in troubleshooting skills. To obtain pertinent information and present answers, it also takes the capacity to think rapidly, adapt to various situations, and communicate effectively. Strong troubleshooting abilities allow one to locate and fix technical or operational problems, reduce downtime, and guarantee the efficient running of systems, machinery, or processes.
          <h3>Not sure about your skills? {'  '}
            <a href="https://www.proprofs.com/quiz-school/story.php?title=troubleshooting-practice-quiz-1" target="_blank" rel="noopener noreferrer" className="gradient-link">Assess yourself here!</a>
          </h3>
        </p>
        <InputButton
            number={values.troubleshooting_skills || 0} // Pass the value from the context state as the 'number' prop
            onIncrement={() => {
              if (values.troubleshooting_skills < 10) {
                handleInputChange({ target: { value: parseInt(values.troubleshooting_skills || 0) + 1 } });
              }
            }}
            onDecrement={() => {
              if (values.troubleshooting_skills > 0) {
                handleInputChange({ target: { value: parseInt(values.troubleshooting_skills || 0) - 1 } });
              }
            }}
          />
          <button className="next-button" onClick={handleNext}>Next</button>
      </div>
    </div>
    </>
  )
}

export default Troubleshooting