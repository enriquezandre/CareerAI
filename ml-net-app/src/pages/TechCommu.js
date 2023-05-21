import React, { useContext } from 'react'
import './Page.css'
import { ValuesContext } from './ValuesContext'
import { useAutoFocus } from '../components/useAutoFocus';
import { NextButton } from '../components/NextButton';

function TechCommu() {
  const { values, setValues } = useContext(ValuesContext);
  const autoFocusRef = useAutoFocus();

  const handleInputChange = (event) => {
    setValues(prevValues => ({
      ...prevValues,
      technical_Communication: event.target.value,
    }));
  };
  return (
    <>
    <div className="Content">
      <div className='topic'>
        Technical Communication
        <p className='desc'>
          Technical communication skill is the capacity to clearly and succinctly communicate complicated technical information to a variety of audiences. It requires skill in both written and spoken communication, as well as the capacity to write technical papers, user manuals, presentations, and reports. Technical communication abilities include logical information organization, acceptable vocabulary use, audience-specific communication style adaptation, and the use of visuals or diagrams to aid understanding. Technical communication skills allow people to effectively collaborate, share expertise, and communicate information accurately in technical areas by bridging the gap between technical concepts and non-technical stakeholders.
          <div className='rating'>
            <input
              type="number"
              ref={autoFocusRef}
              value={values.technical_Communication || ''} // Read the value from the context state
              onChange={handleInputChange}
              className="input-field"
              placeholder="Enter rate here"
            />
          </div>
        </p>
        <NextButton
          link = "/aimachinelearning"
        ></NextButton>
      </div>
    </div>
    </>
  )
}

export default TechCommu