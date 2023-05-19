import React from 'react'
import './Page.css'
import GetStartedBtn from '../components/GetStartedBtn'

function Home() {
  return (
    <>
    <div className="Content">
      <div className='topic'>
        5.0 lang ser
        <p className='desc'>
            CareerAI is an innovative Machine Learning application designed to help people who are trying to pursue their ideal career path within the IT industry.  
            This application will provide personalized recommendations based on your unique skill set and interests in the field.
            <br />
            <br />
            To start, rate yourself based on the specific skill description, and if you're in doubt, you can take the assessment test provided on each skill set.
            <br />
            <br />
            Rating Legend:
            <br />
            0 - Not Interested
            <br />
            1- Poor
            <br />
            2 - Beginner
            <br />
            3 - Average
            <br />
            4 - Intermediate
            <br />
            5 - Excellent
            <br />
            6 - Professional
        </p>
          <GetStartedBtn />
      </div>
    </div>
    </>
  )
}

export default Home