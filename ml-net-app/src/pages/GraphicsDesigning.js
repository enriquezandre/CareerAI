import React, { useContext } from 'react'
import './Page.css'
import { ValuesContext } from './ValuesContext'
import { useNavigate } from 'react-router-dom';
import { useAutoFocus } from '../components/useAutoFocus';

function GraphicsDesigning() {
  const { values, setValues } = useContext(ValuesContext);
  const navigate = useNavigate();
  const autoFocusRef = useAutoFocus();

  const handleInputChange = (event) => {
    setValues(prevValues => ({
      ...prevValues,
      graphics_Designing: event.target.value,
    }));
    navigate("/roleresult");
  };
  return (
    <>
    <div className="Content">
      <div className='topic'>
        Graphics Designing
        <p className='desc'>
          Graphics Designing skill is the ability to generate visual information and convey messages across a variety of media, including print, digital, or multimedia. It includes knowledge of typography, color theory, layout design, and the fundamentals of visual communication. Creativity, attention to detail, and a good sense of aesthetics are all necessary components of graphic design abilities. One can produce aesthetically appealing designs such as logos, illustrations, brochures, websites, user interfaces, and commercials by being proficient in graphics design. Additionally, it entails comprehending client needs, working with stakeholders, and producing designs that successfully communicate ideas, arouse feelings, and improve user experiences.
          <h3>Not sure about your skills? {'  '}
            <a href="https://app.testdome.com/screening/challenge/257?hard=true" target="_blank" rel="noopener noreferrer" className="gradient-link">Assess yourself here!</a>
          </h3>
          <div className='rating'>
            <input
              type="number"
              ref={autoFocusRef}
              value={values.graphics_Designing || ''} // Read the value from the context state
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

export default GraphicsDesigning