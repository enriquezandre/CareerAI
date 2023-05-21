import React, { useContext } from 'react'
import './Page.css'
import { ValuesContext } from './ValuesContext'
import { useAutoFocus } from '../components/useAutoFocus';
import { NextButton } from '../components/NextButton';

function ProgSkills() {
  const { values, setValues } = useContext(ValuesContext);
  const autoFocusRef = useAutoFocus();

  const handleInputChange = (event) => {
    setValues(prevValues => ({
      ...prevValues,
      programming_Skills: event.target.value,
    }));
  };
  return (
    <>
    <div className="Content">
      <div className='topic'>
        Programming Skills
        <p className='desc'>
          Programming Skills refer to the ability to write, understand, and analyze code in one or more programming languages. It comprises competence in the fundamental ideas of programming, such as variables, control flow, data structures, algorithms, and the ideas of object-oriented programming. Knowledge of syntax, libraries, frameworks, debugging strategies, and problem-solving skills are all part of programming skills. A person's ability to program allows them to construct software solutions, automate processes, manage data, and make effective and scalable applications across multiple platforms and domains.
          <h3>Not sure about your skills? {'  '} Choose your preffered language.
            <br />
            <br />
            <a href="https://www.linkedin.com/skill-assessments/C%20(Programming%20Language)/quiz-intro/" target="_blank" rel="noopener noreferrer" className="gradient-link">C Programming Language</a>
            <br />
            <a href="https://www.linkedin.com/skill-assessments/C++/quiz-intro/" target="_blank" rel="noopener noreferrer" className="gradient-link">C++ Programming Language</a>
            <br />
            <a href="https://www.linkedin.com/skill-assessments/C%23/quiz-intro/" target="_blank" rel="noopener noreferrer" className="gradient-link">C# Programming Language</a>
            <br />
            <a href="https://www.linkedin.com/skill-assessments/Java/quiz-intro/" target="_blank" rel="noopener noreferrer" className="gradient-link">Java</a>
            <br />
            <a href="https://www.linkedin.com/skill-assessments/JavaScript/quiz-intro/" target="_blank" rel="noopener noreferrer" className="gradient-link">JavaScript</a>
            <br />
            <a href="https://www.linkedin.com/skill-assessments/Python%20(Programming%20Language)/quiz-intro/" target="_blank" rel="noopener noreferrer" className="gradient-link">Python</a>
          </h3>
          <div className='rating'>
            <input
              type="number"
              ref={autoFocusRef}
              value={values.programming_Skills || ''} // Read the value from the context state
              onChange={handleInputChange}
              className="input-field"
              placeholder="Enter rate here"
            />
          </div>
        </p>
        <NextButton
          link = "/projectmanagement"
        ></NextButton>
      </div>
    </div>
    </>
  )
}

export default ProgSkills