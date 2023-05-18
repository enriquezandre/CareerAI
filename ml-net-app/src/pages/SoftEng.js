import React from 'react'
import './Page.css'

function SoftEng() {
  return (
    <>
    <div className="Content">
      <div className='topic'>
        Software Engingeering
        <p className='desc'>
          Software Engineering skill is the knowledge and proficiency in the methodical, disciplined approach to designing, building, and maintaining software systems. It involves knowledge of requirements analysis, software architecture, coding conventions, testing, debugging, and software maintenance procedures. Software design concepts, code organization, version control, software quality assurance, and teamwork are all necessary for software engineering proficiency. It also entails knowing how to set priorities for activities, manage project timeframes, and interact with stakeholders efficiently. People with strong software engineering abilities can develop dependable, scalable, and maintainable software solutions that adhere to user needs and professional standards.
          <h3>Not sure about your skills? {'  '}
            <a href="https://www.hackerrank.com/test/9m6d5efstnm" target="_blank" rel="noopener noreferrer" className="gradient-link">Assess yourself here!</a>
          </h3>
        </p>
      </div>
    </div>
    </>
  )
}

export default SoftEng