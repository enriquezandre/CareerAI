import React from 'react'
import './Page.css'

function CyberSecurity() {
  return (
    <>
    <div className="Content">
      <div className='topic'>
        Cyber Security
        <p className='desc'>
          Cyber Security skill is about protecting computer systems, networks, and data from unwanted access, attacks, and vulnerabilities.  It includes expertise in risk analysis, threat assessment, secure network architecture, encryption, access controls, incident response, and security protocols. Implementing preventative measures, spotting and mitigating security breaches, and protecting the confidentiality, integrity, and accessibility of information systems in the face of emerging threats and vulnerabilities are all part of being proficient in cyber security.
          <h3>Not sure about your skills? {'  '}
            <a href="https://www.linkedin.com/skill-assessments/Cybersecurity/quiz-intro/" target="_blank" rel="noopener noreferrer" className="gradient-link">Assess yourself here!</a>
          </h3>
        </p>
      </div>
    </div>
    </>
  )
}

export default CyberSecurity