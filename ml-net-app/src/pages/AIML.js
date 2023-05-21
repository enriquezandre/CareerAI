import React, { useContext } from 'react'
import './Page.css'
import { ValuesContext } from './ValuesContext' 
import { useAutoFocus } from '../components/useAutoFocus';
import { NextButton } from '../components/NextButton';

function AIML() {
  const { values, setValues } = useContext(ValuesContext);
  const autoFocusRef = useAutoFocus();

  const handleInputChange = (event) => {
    setValues(prevValues => ({
      ...prevValues,
      aI_ML: event.target.value,
    }));
  };

  return (
    <>
    <div className="Content">
      <div className='topic'>
        AI Machine Learning
        <p className='desc'>
          The ability to design, implement, and use algorithms and models that allow computers to learn and make wise decisions or predictions is known as artificial intelligence (AI) machine learning skills. It includes expertise in statistical analysis, data preprocessing, feature engineering, model evaluation, and optimization methods. It also includes understanding of machine learning algorithms. Understanding different learning methods (supervised, unsupervised, reinforcement), choosing and using the right algorithms, tweaking hyperparameters, evaluating and analyzing model outputs, and incorporating ethical issues are all necessary for proficiency in AI machine learning. It makes it possible for anyone to create AI systems that can analyze data, find patterns, predict the future, and automate decision-making across a range of industries.
          <h3>Not sure about your skills? {'  '}
            <a href="https://www.linkedin.com/skill-assessments/Machine%20Learning/quiz-intro/" target="_blank" rel="noopener noreferrer" className="gradient-link">Assess yourself here!</a>
          </h3>
            <div className='rating'>
              <input
                type="number"
                ref={autoFocusRef}
                value={values.aI_ML || ''} // Read the value from the context state
                onChange={handleInputChange}
                className="input-field"
                placeholder="Enter rate here"
              />
              <div className='next'>
              <NextButton link = "/softwareengineering"></NextButton>
              </div>
          </div>
        </p>
        
      </div>
    </div>
    </>
  )
}

export default AIML