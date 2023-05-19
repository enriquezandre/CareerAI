import React, { useContext, useState } from "react";
import { ValuesContext } from "./ValuesContext";
import axios from "axios";
import "./Page.css";

function RoleResult({ value }) {
  const { values } = useContext(ValuesContext);
  const data = {
    database_Fundamentals: values.database_Fundamentals,
    computer_Architecture: values.computer_Architecture,
    distributed_Computing_Systems: values.distributed_Computing_Systems,
    cyber_Security: values.cyber_Security,
    networking: values.networking,
    software_Development: values.software_Development,
    programming_Skills: values.programming_Skills,
    project_Management: values.project_Management,
    computer_Forensics_Fundamentals: values.computer_Forensics_Fundamentals,
    technical_Communication: values.technical_Communication,
    aI_ML: values.aI_ML,
    software_Engineering: values.software_Engineering,
    business_Analysis: values.business_Analysis,
    communication_skills: values.communication_skills,
    data_Science: values.data_Science,
    troubleshooting_skills: values.troubleshooting_skills,
    graphics_Designing: values.graphics_Designing,
  };

  const roles = [
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
    "Null",
  ];

  const description = [
    "A Database Administrator, often abbreviated as DBA, is responsible for the performance, integrity, and security of a database. They are involved in the planning, development, and troubleshooting of a database, as well as in its deployment and daily maintenance.",
    "A Hardware Engineer is responsible for designing, developing, testing, and overseeing the manufacturing and installation of computer hardware. This includes components such as computer chips, circuit boards, systems, modems, keyboards, and printers.",
    "An Application Support Engineer is responsible for resolving technical issues within an organization's applications and software, providing high-level support to ensure functionality and efficiency. They work closely with IT teams and end-users, troubleshooting issues, updating and maintaining software, and developing strategies to improve system performance and usability.",
    "A Cyber Security Specialist protects an organization's data and network infrastructure by identifying vulnerabilities, implementing security measures, and responding to cyber threats. They continuously monitor systems, install and update security software, conduct security audits, and respond to security incidents, ensuring the confidentiality, integrity, and availability of data.",
    "A Network Engineer, also known as a Network Architect, designs, implements, and troubleshoots computer networks for an organization. These networks can include local area networks (LANs), wide area networks (WANs), and intranets, and the role involves ensuring network performance, security, and scalability to meet the organization's evolving needs.",
    "A Software Developer is responsible for designing, coding, testing, and maintaining software systems or applications. They work closely with analysts, designers, and end-users to understand specifications and requirements, then translate these into reliable and efficient code, often using a variety of programming languages and development tools.",
    "An API Specialist is a professional who designs, develops, manages, and secures APIs (Application Programming Interfaces) within a software or technology context. They facilitate communication between different software systems by ensuring seamless data exchange, thereby enhancing functionality, scalability, and integrations between systems.",
    "A Project Manager is responsible for planning, executing, and overseeing projects from start to finish. They coordinate team members, manage resources, handle budgeting, ensure quality control, and communicate with stakeholders to ensure that the project is completed on time and meets the defined goals and objectives.",
    "An Information Security Specialist is responsible for maintaining the security of a company's information systems, protecting against unauthorized access, data modifications, or data breaches. They implement security policies and protocols, conduct risk assessments, manage security tools, respond to security incidents, and often educate other employees on information security best practices.",
    "A Technical Writer is responsible for creating clear, concise, and comprehensive documentation that explains complex information in a straightforward and understandable manner. This can include user manuals, how-to guides, FAQs, system specifications, and any other documents that help end-users or technical staff understand and use a product or service.",
    " An AI (Artificial Intelligence) and ML (Machine Learning) Specialist focuses on developing, implementing, and refining algorithms and models to enable machines to learn, adapt, and make predictions or decisions. They work with large datasets, design experiments, and apply advanced statistical techniques to create intelligent systems capable of solving complex problems or enhancing human capabilities.",
    "A Software Tester, also known as a Quality Assurance (QA) tester, is responsible for evaluating software applications to ensure they function correctly before they are released. They design and execute test plans, identify and document bugs, provide feedback to developers, and ensure that the final product meets the defined requirements and standards for quality.",
    "A Business Analyst in the field of programming serves as a bridge between business needs and technical solutions. They analyze business processes and requirements, translate these into technical specifications for software development, work with developers to design and implement solutions, and validate that the end product meets business needs. Their understanding of both business operations and programming allows them to effectively facilitate communication between non-technical stakeholders and technical teams.",
    "A Customer Service Executive is responsible for handling customer inquiries, complaints, and providing information about products or services. They interact with customers through various channels like email, phone, social media, or in person. Their primary goal is to ensure customer satisfaction by resolving issues promptly and efficiently, and by providing a high standard of service at all times.",
    "A Data Scientist utilizes statistical analysis, data mining, and programming skills to collect, analyze, and interpret large datasets. They then use this information to develop data-driven solutions to complex business challenges. They're often involved in making predictions, understanding customer behavior, and providing actionable insights to stakeholders, thus helping to guide strategic decision-making within the organization.",
    "A Helpdesk Engineer is a technical professional who provides support and assistance to individuals experiencing computer problems. They diagnose hardware and software issues, perform troubleshooting, manage network configurations, and guide users through step-by-step solutions, often remotely. Their ultimate goal is to help users overcome technical issues and ensure optimal system performance and reliability.",
    "A Graphic Designer is responsible for creating visual concepts to communicate ideas that inspire, inform, or captivate consumers. They design graphics for various media such as websites, logos, advertisements, product packaging, and more. Using both manual and computer software skills, they develop the overall layout and production design to enhance the visual appeal and effectiveness of the message.",
  ];

  const [label, setPredictedLabel] = useState();
  

  const handleEnter = async () => {
    await axios
      .post(`https://localhost:62573/predict`, data)
      .then((response) => {
        setPredictedLabel(response.data.predictedLabel);
      })
      .catch((error) => console.log("Something went wrong"));
  };

  return (
    <>
      <div className="Content">
        <div className="roletopic">
          <div className="left-column">
          Role Result
          <p className="roledesc">
            Database Fundamentals: {values.database_Fundamentals}
            <br />
            Computer Architecture: {values.computer_Architecture}
            <br />
            Distributed Computing Systems: {values.distributed_Computing_Systems}
            <br />
            Cyber Security: {values.cyber_Security}
            <br />
            Networking: {values.networking}
            <br />
            Software Development: {values.software_Development}
            <br />
            Programming Skills: {values.programming_Skills}
            <br />
            Project Management: {values.project_Management}
            <br />
            Computer Forensics Fundamentals: {values.computer_Forensics_Fundamentals}
            <br />
            Technical Communication: {values.technical_Communication}
            <br />
            AI Machine Learning: {values.aI_ML}
            <br />
            Software Engineering: {values.software_Engineering}
            <br />
            Business Analysis: {values.business_Analysis}
            <br />
            Communication Skills: {values.communication_skills}
            <br />
            Data Science: {values.data_Science}
            <br />
            Troubleshooting Skills: {values.troubleshooting_skills}
            <br />
            Graphics Designing: {values.graphics_Designing}
          </p>
          <button className="show-result-button" onClick={handleEnter}>Show Result</button>
          </div>
          <div className="right-column">
            <div className="roleresult">
            <div className='rolelabel'>
              ROLE: {label} {roles[label - 1]}
              <br />
              <p className='roledesc'>
              {description[label - 1]}
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoleResult;
