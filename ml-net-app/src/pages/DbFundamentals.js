import React, { useContext } from 'react'
import './Page.css'
import { ValuesContext } from './ValuesContext'
import { useNavigate } from 'react-router-dom';

function DbFundamentals() {
  const { values, setValues } = useContext(ValuesContext);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setValues(prevValues => ({
      ...prevValues,
      database_Fundamentals: event.target.value,
    }));
    navigate("/computerarchitecture");
  };

  return (
    <>
    <div className="Content">
      <div className='topic'>
      Database Fundamentals
        <p className='desc'>
          Database Fundamentals skill pertains to the foundational knowledge and understanding of databases and their core concepts. It covers fundamental database administration responsibilities as well as knowledge of database management systems, data modeling, normalization, SQL querying, and database design principles. For successfully storing, managing, and retrieving data in a systematic and organized manner, database fundamentals proficiency is required.
          <h3>Not sure about your skills? {'  '}
            <a href="https://www.linkedin.com/skill-assessments/MySQL/quiz-intro/" target="_blank" rel="noopener noreferrer" className="gradient-link">Assess yourself here!</a>
          </h3>
        </p>
        <input
            type="number"
            value={values.database_Fundamentals || ''} // Read the value from the context state
            onChange={handleInputChange}
          />
      </div>
    </div>
    </>
  )
}

export default DbFundamentals