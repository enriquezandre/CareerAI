import React, { useContext } from 'react'
import './Page.css'
import { ValuesContext } from './ValuesContext' 
import { useNavigate } from 'react-router-dom';
import InputButton from '../components/InputButton'

function BusinessAnalysis() {
  const { values, setValues } = useContext(ValuesContext);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setValues(prevValues => ({
      ...prevValues,
      business_Analysis: event.target.value,
    }));
  };

  const handleNext = () => {
    navigate("/communicationskills");
  };

  return (
    <>
    <div className="Content">
      <div className='topic'>
      Business Analysis
        <p className='desc'>
          Business Analysis skill is the capacity to evaluate and comprehend business requirements, spot issues or opportunities, and suggest solutions that are in line with corporate objectives. Techniques for capturing and storing requirements, performing stakeholder analysis, process mapping, leading workshops, and carrying out feasibility studies are all included. Data analysis, problem-solving, collaboration with stakeholders, communication, and stakeholder collaboration are all necessary for business analysis proficiency. Additionally, it requires expertise in corporate procedures, market trends, and specialized knowledge. By bridging the gap between business stakeholders and technical teams, people with effective business analysis abilities may ensure that solutions fulfill business needs and promote organizational success.
          <h3>Not sure about your skills? {'  '}
            <a href="https://www.linkedin.com/skill-assessments/Google%20Analytics/quiz-intro/" target="_blank" rel="noopener noreferrer" className="gradient-link">Assess yourself here!</a>
          </h3>
        </p>
        <InputButton
            number={values.business_Analysis || 0} // Pass the value from the context state as the 'number' prop
            onIncrement={() => {
              if (values.business_Analysis < 10) {
                handleInputChange({ target: { value: parseInt(values.business_Analysis || 0) + 1 } });
              }
            }}
            onDecrement={() => {
              if (values.business_Analysis > 0) {
                handleInputChange({ target: { value: parseInt(values.business_Analysis || 0) - 1 } });
              }
            }}
          />
          <button className="next-button" onClick={handleNext}>Next</button>
      </div>
    </div>
    </>
  )
}

export default BusinessAnalysis