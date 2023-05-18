import React, { useContext } from 'react'
import './Page.css'
import { ValuesContext } from './ValuesContext'
import { useNavigate } from 'react-router-dom';

function SoftDev() {
  const { values, setValues } = useContext(ValuesContext);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setValues(prevValues => ({
      ...prevValues,
      software_Development: event.target.value,
    }));
    navigate("/programmingskills");
  };
  return (
    <>
    <div className="Content">
      <div className='topic'>
        Software Development
        <p className='desc'>
          Software Development is the knowledge of creating, coding, testing, and maintaining software applications. It includes competence in a variety of programming languages, software development processes, version control, bug fixing, and problem-solving. The ability to evaluate requirements, create effective and scalable software solutions, write clear and maintainable code, and work well in a team are all components of a solid software development skill set. To deliver top-notch software, it also entails remaining current with market developments and best practices.
          <h3>Not sure about your skills? {'  '}
            <a href="https://www.proprofs.com/quiz-school/story.php?title=pp-mjk0ntk3nqkfc6" target="_blank" rel="noopener noreferrer" className="gradient-link">Assess yourself here!</a>
          </h3>
        </p>
        <input
            type="number"
            value={values.software_Development || ''} // Read the value from the context state
            onChange={handleInputChange}
          />
      </div>
    </div>
    </>
  )
}

export default SoftDev