import React, { useContext } from 'react'
import './Page.css'
import { ValuesContext } from './ValuesContext'
import { useNavigate } from 'react-router-dom';
import InputButton from '../components/InputButton'


function ProgSkills() {
  const { values, setValues } = useContext(ValuesContext);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setValues(prevValues => ({
      ...prevValues,
      programming_Skills: event.target.value,
    }));
  };

  const handleNext = () => {
    navigate("/projectmanagement");
  };

  return (
    <>
    <div className="Content">
      <div className='topic'>
        Programming Skills
        <p className='desc'>
          Programming Skills refer to the ability to write, understand, and analyze code in one or more programming languages. It comprises competence in the fundamental ideas of programming, such as variables, control flow, data structures, algorithms, and the ideas of object-oriented programming. Knowledge of syntax, libraries, frameworks, debugging strategies, and problem-solving skills are all part of programming skills. A person's ability to program allows them to construct software solutions, automate processes, manage data, and make effective and scalable applications across multiple platforms and domains.
          <h3>Not sure about your skills? {'  '}
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="gradient-link">Assess yourself here!</a>
          </h3>
        </p>
        <InputButton
            number={values.programming_Skills || 0} // Pass the value from the context state as the 'number' prop
            onIncrement={() => {
              if (values.programming_Skills < 10) {
                handleInputChange({ target: { value: parseInt(values.programming_Skills || 0) + 1 } });
              }
            }}
            onDecrement={() => {
              if (values.programming_Skills > 0) {
                handleInputChange({ target: { value: parseInt(values.programming_Skills || 0) - 1 } });
              }
            }}
          />
          <button className="next-button" onClick={handleNext}>Next</button>
      </div>
    </div>
    </>
  )
}

export default ProgSkills