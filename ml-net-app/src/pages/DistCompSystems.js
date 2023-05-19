import React, { useContext } from 'react'
import './Page.css'
import { ValuesContext } from './ValuesContext'
import { useNavigate } from 'react-router-dom';
import InputButton from '../components/InputButton'

function DistCompSystems() {
  const { values, setValues } = useContext(ValuesContext);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setValues(prevValues => ({
      ...prevValues,
      distributed_Computing_Systems: event.target.value,
    }));
  };

  const handleNext = () => {
    navigate("/cybersecurity");
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
        </p>
        <InputButton
            number={values.distributed_Computing_Systems || 0} // Pass the value from the context state as the 'number' prop
            onIncrement={() => {
              if (values.distributed_Computing_Systems < 10) {
                handleInputChange({ target: { value: parseInt(values.distributed_Computing_Systems || 0) + 1 } });
              }
            }}
            onDecrement={() => {
              if (values.distributed_Computing_Systems > 0) {
                handleInputChange({ target: { value: parseInt(values.distributed_Computing_Systems || 0) - 1 } });
              }
            }}
          />
          <button className="next-button" onClick={handleNext}>Next</button>
      </div>
    </div>
    </>
  )
}

export default DistCompSystems