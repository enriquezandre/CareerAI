import React, { useContext } from 'react'
import './Page.css'
import { ValuesContext } from './ValuesContext'
import { useNavigate } from 'react-router-dom';
import InputButton from '../components/InputButton'

function DbFundamentals() {
  const { values, setValues } = useContext(ValuesContext);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setValues(prevValues => ({
      ...prevValues,
      database_Fundamentals: event.target.value,
    }));
  };

  const handleNext = () => {
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
          <InputButton
            number={values.database_Fundamentals || 0} // Pass the value from the context state as the 'number' prop
            onIncrement={() => {
              if (values.database_Fundamentals < 10) {
                handleInputChange({ target: { value: parseInt(values.database_Fundamentals || 0) + 1 } });
              }
            }}
            onDecrement={() => {
              if (values.database_Fundamentals > 0) {
                handleInputChange({ target: { value: parseInt(values.database_Fundamentals || 0) - 1 } });
              }
            }}
          />
          <button className="next-button" onClick={handleNext}>Next</button>
        </div>
      </div>
    </>
  );
}

export default DbFundamentals;
