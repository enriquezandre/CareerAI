import React, { useContext } from 'react'
import './Page.css'
import { ValuesContext } from './ValuesContext'
import { useNavigate } from 'react-router-dom';
import InputButton from '../components/InputButton'

function Networking() {
  const { values, setValues } = useContext(ValuesContext);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setValues(prevValues => ({
      ...prevValues,
      networking: event.target.value,
    }));
  };

  const handleNext = () => {
    navigate("/softwaredevelopment");
  };

  return (
    <>
    <div className="Content">
      <div className='topic'>
        Networking
        <p className='desc'>
          Networking skill is understanding computer networks and having the technical know-how to build, implement, and debug network architecture. It calls for an understanding of routing, switching, IP addressing, subnetting, network security, and network troubleshooting, as well as network protocols and topologies. The ability to setup and administer network devices, establish safe and dependable communication between systems, identify and fix network problems, and guarantee effective data transport and connectivity within a network environment are all made possible by networking proficiency.
          <h3>Not sure about your skills? {'  '}
            <a href="https://www.proprofs.com/quiz-school/story.php?title=nje5ode5vs0p" target="_blank" rel="noopener noreferrer" className="gradient-link">Assess yourself here!</a>
          </h3>
        </p>
        <InputButton
            number={values.networking || 0} // Pass the value from the context state as the 'number' prop
            onIncrement={() => {
              if (values.networking < 10) {
                handleInputChange({ target: { value: parseInt(values.networking || 0) + 1 } });
              }
            }}
            onDecrement={() => {
              if (values.networking > 0) {
                handleInputChange({ target: { value: parseInt(values.networking || 0) - 1 } });
              }
            }}
          />
          <button className="next-button" onClick={handleNext}>Next</button>
      </div>
    </div>
    </>
  )
}

export default Networking