import React, { useContext } from 'react'
import './Page.css'
import { ValuesContext } from './ValuesContext'
import { useAutoFocus } from '../components/useAutoFocus';
import { NextButton } from '../components/NextButton';

function CompArchi() {
  const { values, setValues } = useContext(ValuesContext);
  const autoFocusRef = useAutoFocus();

  const handleInputChange = (event) => {
    setValues(prevValues => ({
      ...prevValues,
      computer_Architecture: event.target.value,
    }));
  };
  return (
    <>
    <div className="Content">
      <div className='topic'>
      Computer Architecture
        <p className='desc'>
          Computer Architecture skill is the ability to comprehend the planning and structuring of computer systems at the hardware level. It includes understanding of the input/output systems, memory structure, instruction sets, processor architecture, and system performance assessment. For building effective and optimal computer systems, enhancing performance, and resolving hardware-related issues, expertise in computer architecture is essential.
          <h3>Not sure about your skills? {'  '}
            <a href=" https://www.proprofs.com/quiz-school/quizshow.php?title=computer-architecture_1&q=1" target="_blank" rel="noopener noreferrer" className="gradient-link">Assess yourself here!</a>
          </h3>
          <div className='rating'>
            <input
              type="number"
              ref={autoFocusRef}
              value={values.computer_Architecture || ''} // Read the value from the context state
              onChange={handleInputChange}
              className="input-field"
              placeholder="Enter rate here"
            />
          </div>
        </p>
        <NextButton
          link = "/distributedcomputingsystems"
        ></NextButton>
      </div>
    </div>
    </>
  )
}

export default CompArchi