import React, { useContext } from 'react'
import './Page.css'
import { ValuesContext } from './ValuesContext'
import { useNavigate } from 'react-router-dom';
import { useAutoFocus } from '../components/useAutoFocus';

function Networking() {
  const { values, setValues } = useContext(ValuesContext);
  const navigate = useNavigate();
  const autoFocusRef = useAutoFocus();

  const handleInputChange = (event) => {
    setValues(prevValues => ({
      ...prevValues,
      networking: event.target.value,
    }));
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
          <div className='rating'>
            <input
              type="number"
              ref={autoFocusRef}
              value={values.networking || ''} // Read the value from the context state
              onChange={handleInputChange}
              className="input-field"
              placeholder="Enter rate here"
            />
          </div>
        </p>
      </div>
    </div>
    </>
  )
}

export default Networking