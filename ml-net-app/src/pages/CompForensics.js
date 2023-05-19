import React, { useContext } from 'react'
import './Page.css'
import { ValuesContext } from './ValuesContext'
import { useNavigate } from 'react-router-dom';
import InputButton from '../components/InputButton'

function CompForensics() {
  const { values, setValues } = useContext(ValuesContext);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setValues(prevValues => ({
      ...prevValues,
      computer_Forensics_Fundamentals: event.target.value,
    }));
  };

  const handleNext = () => {
    navigate("/technicalcommunication");
  };

  return (
    <>
    <div className="Content">
      <div className='topic'>
      Computer Forensics Fundamentals
        <p className='desc'>
          Computer Forensics Fundamentals skill refers to the foundational knowledge and expertise in the field of digital forensics, specifically related to the investigation and analysis of digital evidence in legal or cybersecurity contexts. Understanding forensic principles, data recovery methods, evidence preservation, forensic imaging, file systems, network forensics, and investigative methodologies are all included. The ability to identify, gather, evaluate, and present digital evidence while adhering to legal and forensic best practices supports investigations, incident response, and legal procedures involving digital artifacts. This ability is made possible by proficiency in computer forensics fundamentals.
          <h3>Not sure about your skills? {'  '}
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="gradient-link">Assess yourself here!</a>
          </h3>
        </p>
        <InputButton
            number={values.computer_Forensics_Fundamentals || 0} // Pass the value from the context state as the 'number' prop
            onIncrement={() => {
              if (values.computer_Forensics_Fundamentals < 10) {
                handleInputChange({ target: { value: parseInt(values.computer_Forensics_Fundamentals || 0) + 1 } });
              }
            }}
            onDecrement={() => {
              if (values.computer_Forensics_Fundamentals > 0) {
                handleInputChange({ target: { value: parseInt(values.computer_Forensics_Fundamentals || 0) - 1 } });
              }
            }}
          />
          <button className="next-button" onClick={handleNext}>Next</button>
      </div>
    </div>
    </>
  )
}

export default CompForensics