import React, { useContext } from 'react'
import './Page.css'
import { ValuesContext } from './ValuesContext' 
import { useNavigate } from 'react-router-dom';

function BusinessAnalysis() {
  const { values, setValues } = useContext(ValuesContext);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setValues(prevValues => ({
      ...prevValues,
      business_Analysis: event.target.value,
    }));
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
          <div className='rating'>
            <input
              type="number"
              value={values.business_Analysis || ''} // Read the value from the context state
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

export default BusinessAnalysis