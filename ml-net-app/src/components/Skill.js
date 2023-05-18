import React from 'react'
import '../components/Skill.css'
import { useState } from 'react';
import axios from 'axios';

function Skill() {
    const skills = [
        "Database Administrator",
        "Hardware Engineer",
        "Application Support Engineer",
        "Cyber Security Specialist",
        "Networking Engineer",
        "Software Developer",
        "API Specialist",
        "Project Manager",
        "Information Security Specialist",
        "Technical Writer",
        "AI ML Specialist",
        "Software tester",
        "Business Analyst",
        "Customer Service Executive",
        "Data Scientist",
        "Helpdesk Engineer",
        "Graphics Designer",
        "Null" 
      ];
      
      const [predictedSkill, setPredictedSkill] = useState("");
    
      const [formData, setFormData] = useState({
        database_Fundamentals: 0,
        computer_Architecture: 0,
        distributed_Computing_Systems: 0,
        cyber_Security: 0,
        networking: 0,
        software_Development: 0,
        programming_Skills: 0,
        project_Management: 0,
        computer_Forensics_Fundamentals: 0,
        technical_Communication: 0,
        aI_ML: 0,
        software_Engineering: 0,
        business_Analysis: 0,
        communication_skills: 0,
        data_Science: 0,
        troubleshooting_skills: 0,
        graphics_Designing: 0,
      }); 
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        await axios
        .post(`https://localhost:62573/predict`, formData)
        .then(response => {
            console.log(response.data);
            setPredictedSkill(skills[response.data.predictedLabel - 1]);
        })
        .catch(error => console.log("Something went wrong"));
      }
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        const parsedValue = parseInt(value);
      
        setFormData({
          ...formData,
          [name]: parsedValue
        });
      };
      
    
      return (
        <div className="Skill">
          <form onSubmit={handleSubmit}>
            <label>
              Database Fundamentals: 
              <input
                min = '0'
                max = '7'
                type = "number"
                name='database_Fundamentals'
                value = {formData.database_Fundamentals}
                onChange={handleInputChange}
              />
            </label>
            
            <label>
              Computer Architecture:
              <input
                type = "number"
                name='computer_Architecture'
                value = {formData.computer_Architecture}
                onChange={handleInputChange}
              />
            </label>
            
            <label>
              Distributed Computing Systems:
              <input
                type = "number"
                name='distributed_Computing_Systems'
                value = {formData.distributed_Computing_Systems}
                onChange={handleInputChange}
              />
            </label>
            
            <label>
              Cyber Security:
              <input
                type = "number"
                name='cyber_Security'
                value = {formData.cyber_Security}
                onChange={handleInputChange}
              />
            </label>
            
            <label>
              Networking:
              <input
                type = "number"
                name='networking'
                value = {formData.networking}
                onChange={handleInputChange}
              />
            </label>
            
            <label>
              Software Development: 
              <input
                type = "number"
                name='software_Development'
                value = {formData.software_Development}
                onChange={handleInputChange}
              />
            </label>
            
            <label>
              Programming Skills:
              <input
                type = "number"
                name='programming_Skills'
                value = {formData.programming_Skills}
                onChange={handleInputChange}
              />
            </label>
            
            <label>
              Project Management:
              <input
                type = "number"
                name='project_Management'
                value = {formData.project_Management}
                onChange={handleInputChange}
              />
            </label>
            
            <label>
              Computer Forensic Fundamentals:
              <input
                type = "number"
                name='computer_Forensics_Fundamentals'
                value = {formData.computer_Forensics_Fundamentals}
                onChange={handleInputChange}
              />
            </label>
            
            <label>
              Technical Communication:
              <input
                type = "number"
                name='technical_Communication'
                value = {formData.technical_Communication}
                onChange={handleInputChange}
              />
            </label>
            
            <label>
              AI/Machine Learning:
              <input
                type = "number"
                name='aI_ML'
                value = {formData.aI_ML}
                onChange={handleInputChange}
              />
            </label>
            
            <label>
              Software Engineering:
              <input
                type = "number"
                name='software_Engineering'
                value = {formData.software_Engineering}
                onChange={handleInputChange}
              />
            </label>
            
            <label>
              Business Analysis
              <input
                type = "number"
                name='business_Analysis'
                value = {formData.business_Analysis}
                onChange={handleInputChange}
              />
            </label>
            
            <label>
              Communication Skills:
              <input
                type = "number"
                name='communication_skills'
                value = {formData.communication_skills}
                onChange={handleInputChange}
              />
            </label>
            
            <label>
              Data Science:
              <input
                type = "number"
                name='data_Science'
                value = {formData.data_Science}
                onChange={handleInputChange}
              />
            </label>
            
            <label>
              Troubleshooting Skills:
              <input
                type = "number"
                name='troubleshooting_skills'
                value = {formData.troubleshooting_skills}
                onChange={handleInputChange}
              />
            </label>
            
            <label>
              Graphics Design:
              <input
                type = "number"
                name='graphics_Designing'
                value = {formData.graphics_Designing}
                onChange={handleInputChange}
              />
            </label>
            
            <button type='submit'>Test</button>
            {predictedSkill && <h2>Predicted Role: {predictedSkill}</h2>}
          </form>
        </div>
      );
}

export default Skill