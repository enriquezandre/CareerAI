import { ValuesContext } from './ValuesContext'
import { useNavigate } from 'react-router-dom';
import React, { useContext } from 'react'
import './Page.css'
import InputButton from '../components/InputButton'

function DataScience() {
  const { values, setValues } = useContext(ValuesContext);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setValues(prevValues => ({
      ...prevValues,
      data_Science: event.target.value,
    }));
  };

  const handleNext = () => {
    navigate("/troubleshootingskills");
  };

  return (
    <>
    <div className="Content">
      <div className='topic'>
        Data Science
        <p className='desc'>
          Data Science skill is the aptitude to extract knowledge and insights from big and complicated datasets using diverse statistical, mathematical, and machine learning techniques. Data manipulation, data visualization, exploratory data analysis, statistical analysis, and predictive modeling are all included in its scope. Along with awareness of database systems and data querying languages, data science skills also require knowledge of programming languages like Python or R, as well as libraries and frameworks for data analysis. The ability to extract significant patterns, trends, and insights from data, create predictive models, make data-driven decisions, and present findings to stakeholders is made possible by proficiency in data science. It includes the capacity to use data to address difficult issues, enhance procedures, and influence corporate outcomes across a range of industries, including banking, healthcare, marketing, and more.
          <h3>Not sure about your skills? {'  '}
            <a href="https://www.interviewquery.com/challenges/900e86ef-f4b1-11eb-8e37-02b7f35cb379" target="_blank" rel="noopener noreferrer" className="gradient-link">Assess yourself here!</a>
          </h3>
        </p>
        <InputButton
            number={values.data_Science || 0} // Pass the value from the context state as the 'number' prop
            onIncrement={() => {
              if (values.data_Science < 10) {
                handleInputChange({ target: { value: parseInt(values.data_Science || 0) + 1 } });
              }
            }}
            onDecrement={() => {
              if (values.data_Science > 0) {
                handleInputChange({ target: { value: parseInt(values.data_Science || 0) - 1 } });
              }
            }}
          />
          <button className="next-button" onClick={handleNext}>Next</button>
      </div>
    </div>
    </>
  )
}

export default DataScience