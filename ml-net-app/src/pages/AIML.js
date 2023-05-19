import React, { useContext } from 'react'
import './Page.css'
import { ValuesContext } from './ValuesContext' 
import { useNavigate } from 'react-router-dom';
import InputButton from '../components/InputButton'

function AIML() {
  const { values, setValues } = useContext(ValuesContext);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setValues(prevValues => ({
      ...prevValues,
      aI_ML: event.target.value,
    }));
  };

  const handleNext = () => {
    navigate("/softwareengineering");
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
        </p>
        <InputButton
            number={values.aI_ML || 0} // Pass the value from the context state as the 'number' prop
            onIncrement={() => {
              if (values.aI_ML < 10) {
                handleInputChange({ target: { value: parseInt(values.aI_ML || 0) + 1 } });
              }
            }}
            onDecrement={() => {
              if (values.aI_ML > 0) {
                handleInputChange({ target: { value: parseInt(values.aI_ML || 0) - 1 } });
              }
            }}
          />
          <button className="next-button" onClick={handleNext}>Next</button>
      </div>
    </div>
    </>
  )
}

export default AIML