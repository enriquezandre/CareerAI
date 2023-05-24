import React, { useContext } from 'react'
import './Page.css'
import { ValuesContext } from './ValuesContext'
import { useAutoFocus } from '../components/useAutoFocus';
import { NextButton } from '../components/NextButton';

function CyberSecurity() {
  const { values, setValues } = useContext(ValuesContext);
  const autoFocusRef = useAutoFocus();

  const handleInputChange = (event) => {
    setValues(prevValues => ({
      ...prevValues,
      cyber_Security: event.target.value,
    }));
  };
  return (
    <>
    <div className="Content">
      <div className='topic'>
        Cyber Security
        <p className='desc'>
          Cyber Security skill is about protecting computer systems, networks, and data from unwanted access, attacks, and vulnerabilities.  It includes expertise in risk analysis, threat assessment, secure network architecture, encryption, access controls, incident response, and security protocols. Implementing preventative measures, spotting and mitigating security breaches, and protecting the confidentiality, integrity, and accessibility of information systems in the face of emerging threats and vulnerabilities are all part of being proficient in cyber security.
          <h3>Not sure about your skills? {'  '}
            <a href="https://www.linkedin.com/skill-assessments/Cybersecurity/quiz-intro/" target="_blank" rel="noopener noreferrer" className="gradient-link">Assess yourself here!</a>
          </h3>
          <div className='rating'>
            <input
              type="number"
              ref={autoFocusRef}
              value={values.cyber_Security || ''} // Read the value from the context state
              onChange={handleInputChange}
              className="input-field"
              placeholder="Enter rate here"
            />
          </div>
          <div className='next'>
            <NextButton link = "/networking"></NextButton>
          </div>
        </p>
      </div>
    </div>
    </>
  )
}

export default CyberSecurity