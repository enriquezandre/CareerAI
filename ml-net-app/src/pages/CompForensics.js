import React, { useContext } from 'react'
import './Page.css'
import { ValuesContext } from './ValuesContext'
import { useNavigate } from 'react-router-dom';

function CompForensics() {
  const { values, setValues } = useContext(ValuesContext);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setValues(prevValues => ({
      ...prevValues,
      computer_Forensics_Fundamentals: event.target.value,
    }));
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
        <input
            type="number"
            value={values.computer_Forensics_Fundamentals || ''} // Read the value from the context state
            onChange={handleInputChange}
          />
      </div>
    </div>
    </>
  )
}

export default CompForensics