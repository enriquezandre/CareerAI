import React, { useContext } from 'react'
import './Page.css'
import { ValuesContext } from './ValuesContext'
import { useAutoFocus } from '../components/useAutoFocus';
import { NextButton } from '../components/NextButton';

function CompForensics() {
  const { values, setValues } = useContext(ValuesContext);
  const autoFocusRef = useAutoFocus();

  const handleInputChange = (event) => {
    setValues(prevValues => ({
      ...prevValues,
      computer_Forensics_Fundamentals: event.target.value,
    }));
  };
  return (
    <>
    <div className="Content">
      <div className='topic'>
      Computer Forensics Fundamentals
        <p className='desc'>
          Computer Forensics Fundamentals skill refers to the foundational knowledge and expertise in the field of digital forensics, specifically related to the investigation and analysis of digital evidence in legal or cybersecurity contexts. Understanding forensic principles, data recovery methods, evidence preservation, forensic imaging, file systems, network forensics, and investigative methodologies are all included. The ability to identify, gather, evaluate, and present digital evidence while adhering to legal and forensic best practices supports investigations, incident response, and legal procedures involving digital artifacts. This ability is made possible by proficiency in computer forensics fundamentals.
          <h3>Not sure about your skills? {'  '}
            <a href="https://forensicfield.blog/quiz/mcqs-on-cyber-forensics/" target="_blank" rel="noopener noreferrer" className="gradient-link">Assess yourself here!</a>
          </h3>
          <div className='rating'>
            <input
              type="number"
              ref={autoFocusRef}
              value={values.computer_Forensics_Fundamentals || ''} // Read the value from the context state
              onChange={handleInputChange}
              className="input-field"
              placeholder="Enter rate here"
            />
          </div>
        </p>
        <NextButton
          link = "/technicalcommunication"
        ></NextButton>
      </div>
    </div>
    </>
  )
}

export default CompForensics