import React, { useContext } from 'react'
import './Page.css'
import { ValuesContext } from './ValuesContext' 
import { useAutoFocus } from '../components/useAutoFocus';
import { NextButton } from '../components/NextButton';

function SoftEng() {
  const { values, setValues } = useContext(ValuesContext);
  const autoFocusRef = useAutoFocus();

  const handleInputChange = (event) => {
    setValues(prevValues => ({
      ...prevValues,
      software_Engineering: event.target.value,
    }));
  };
  return (
    <>
    <div className="Content">
      <div className='topic'>
        Software Engingeering
        <p className='desc'>
          Software Engineering skill is the knowledge and proficiency in the methodical, disciplined approach to designing, building, and maintaining software systems. It involves knowledge of requirements analysis, software architecture, coding conventions, testing, debugging, and software maintenance procedures. Software design concepts, code organization, version control, software quality assurance, and teamwork are all necessary for software engineering proficiency. It also entails knowing how to set priorities for activities, manage project timeframes, and interact with stakeholders efficiently. People with strong software engineering abilities can develop dependable, scalable, and maintainable software solutions that adhere to user needs and professional standards.
          <h3>Not sure about your skills? {'  '}
            <a href="https://www.hackerrank.com/test/9m6d5efstnm" target="_blank" rel="noopener noreferrer" className="gradient-link">Assess yourself here!</a>
          </h3>
          <div className='rating'>
            <input
              type="number"
              ref={autoFocusRef}
              value={values.software_Engineering || ''} // Read the value from the context state
              onChange={handleInputChange}
              className="input-field"
              placeholder="Enter rate here"
            />
          </div>
        </p>
        <NextButton
          link = "/businessanalysis"
        ></NextButton>
      </div>
    </div>
    </>
  )
}

export default SoftEng