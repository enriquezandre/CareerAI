import React, { useContext } from 'react'
import './Page.css'
import { ValuesContext } from './ValuesContext'
import { useNavigate } from 'react-router-dom';

function ProjMgmt() {
  const { values, setValues } = useContext(ValuesContext);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setValues(prevValues => ({
      ...prevValues,
      project_Management: event.target.value,
    }));
    navigate("/computerforensicsfundamentals");
  };
  return (
    <>
    <div className="Content">
      <div className='topic'>
        Project Management
        <p className='desc'>
          Project Management skill is the capacity to efficiently plan, organize, execute, and control projects to meet certain goals and objectives within predetermined restrictions. It calls for knowledge and proficiency in fields including stakeholder involvement, project planning, resource management, scheduling, budgeting, and risk assessment. A person who is proficient in project management is able to lead and coordinate project teams, manage project scope, track development, reduce risks, and deliver projects on schedule and within budget. The optimal use of resources and the successful completion of projects in a planned and organized manner are ensured by effective project management abilities.
          <h3>Not sure about your skills? {'  '}
            <a href="https://www.testdome.com/tests/project-management-test/75" target="_blank" rel="noopener noreferrer" className="gradient-link">Assess yourself here!</a>
          </h3>
        </p>
        <input
            type="number"
            value={values.project_Management || ''} // Read the value from the context state
            onChange={handleInputChange}
          />
      </div>
    </div>
    </>
  )
}

export default ProjMgmt