import React, { useContext } from 'react'
import './Page.css'
import { ValuesContext } from './ValuesContext'
import { useAutoFocus } from '../components/useAutoFocus';
import { NextButton } from '../components/NextButton';

function Troubleshooting() {
  const { values, setValues } = useContext(ValuesContext);
  const autoFocusRef = useAutoFocus();

  const handleInputChange = (event) => {
    setValues(prevValues => ({
      ...prevValues,
      troubleshooting_skills: event.target.value,
    }));
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
          <div className='rating'>
            <input
              type="number"
              ref={autoFocusRef}
              value={values.troubleshooting_skills || ''} // Read the value from the context state
              onChange={handleInputChange}
              className="input-field"
              placeholder="Enter rate here"
            />
          </div>
        </p>
        <NextButton
          link = "/graphicsdesigning"
        ></NextButton>
      </div>
    </div>
    </>
  )
}

export default Troubleshooting