import React, { useContext } from 'react'
import './Page.css'
import { ValuesContext } from './ValuesContext'
import { useAutoFocus } from '../components/useAutoFocus';
import { NextButton } from '../components/NextButton';

function DistCompSystems() {
  const { values, setValues } = useContext(ValuesContext);
  const autoFocusRef = useAutoFocus();

  const handleInputChange = (event) => {
    setValues(prevValues => ({
      ...prevValues,
      distributed_Computing_Systems: event.target.value,
    }));
  };
  return (
    <>
    <div className="Content">
      <div className='topic'>
        Distributed Computer Systems
        <p className='desc'>
          Distributed Computing skill is the ability to design, build, and manage systems that work across several interconnected computers or nodes. It entails comprehending ideas like parallel processing, scalability, fault tolerance, network communication protocols, and distributed systems architecture. Individuals with expertise in distributed computing may develop and build reliable programs that are scalable and take advantage of distributed resources for better performance and dependability.
          <h3>Not sure about your skills? {'  '}
            <a href="https://www.proprofs.com/quiz-school/story.php?title=mjmzmdkwnwrxjm" target="_blank" rel="noopener noreferrer" className="gradient-link">Assess yourself here!</a>
          </h3>
          <div className='rating'>
            <input
              type="number"
              ref={autoFocusRef}
              value={values.distributed_Computing_Systems || ''} // Read the value from the context state
              onChange={handleInputChange}
              className="input-field"
              placeholder="Enter rate here"
            />
          </div>
          <div className='next'>
            <NextButton link = "/cybersecurity"></NextButton>
          </div>
        </p>
      </div>
    </div>
    </>
  )
}

export default DistCompSystems