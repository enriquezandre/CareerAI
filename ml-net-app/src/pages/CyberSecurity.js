import React, { useContext } from 'react'
import './Page.css'
import { ValuesContext } from './ValuesContext'
import { useNavigate } from 'react-router-dom';
import InputButton from '../components/InputButton'

function CyberSecurity() {
  const { values, setValues } = useContext(ValuesContext);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setValues(prevValues => ({
      ...prevValues,
      cyber_Security: event.target.value,
    }));
  };

  const handleNext = () => {
    navigate("/networking");
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
        </p>
        <InputButton
            number={values.cyber_Security || 0} // Pass the value from the context state as the 'number' prop
            onIncrement={() => {
              if (values.cyber_Security < 10) {
                handleInputChange({ target: { value: parseInt(values.cyber_Security || 0) + 1 } });
              }
            }}
            onDecrement={() => {
              if (values.cyber_Security > 0) {
                handleInputChange({ target: { value: parseInt(values.cyber_Security || 0) - 1 } });
              }
            }}
          />
          <button className="next-button" onClick={handleNext}>Next</button>
      </div>
    </div>
    </>
  )
}

export default CyberSecurity