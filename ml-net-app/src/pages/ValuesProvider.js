import React, { useState } from "react";
import { ValuesContext } from "./ValuesContext";

const ValuesProvider = ({ children }) => {
  const [values, setValues] = useState({
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

  return (
    <ValuesContext.Provider value={{ values, setValues }}>
      {children}
    </ValuesContext.Provider>
  );
};

export default ValuesProvider;
