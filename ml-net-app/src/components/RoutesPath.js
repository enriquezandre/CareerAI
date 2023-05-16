import { Routes, Route } from 'react-router-dom';
import DbFundamentals from '../pages/DbFundamentals';
import Home from '../pages/Home';
import CompArchi from '../pages/CompArchi';
import DistCompSystems from '../pages/DistCompSystems';
import CyberSecurity from '../pages/CyberSecurity';
import Networking from '../pages/Networking';
import SoftDev from '../pages/SoftDev';
import ProgSkills from '../pages/ProgSkills';
import ProjMgmt from '../pages/ProjMgmt';
import CompForensics from '../pages/CompForensics';
import TechCommu from '../pages/TechCommu';
import AIML from '../pages/AIML';
import SoftEng from '../pages/SoftEng';
import BusinessAnalysis from '../pages/BusinessAnalysis';
import CommSkills from '../pages/CommSkills';
import DataScience from '../pages/DataScience';
import Troubleshooting from '../pages/Troubleshooting';
import GraphicsDesigning from '../pages/GraphicsDesigning';

function RoutesPath() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/databasefundamentals" element={<DbFundamentals/>}/>
            <Route path="/computerarchitecture" element={<CompArchi/>}/>
            <Route path="/distributedcomputingsystems" element={<DistCompSystems/>}/>
            <Route path="/cybersecurity" element={<CyberSecurity/>}/>
            <Route path="/networking" element={<Networking/>}/>
            <Route path="/softwaredevelopment" element={<SoftDev/>}/>
            <Route path="/programmingskills" element={<ProgSkills/>}/>
            <Route path="/projectmanagement" element={<ProjMgmt/>}/>
            <Route path="/computerforensicsfundamentals" element={<CompForensics/>}/>
            <Route path="/technicalcommunication" element={<TechCommu/>}/>
            <Route path="/aimachinelearning" element={<AIML/>}/>
            <Route path="/softwareengineering" element={<SoftEng/>}/>
            <Route path="/businessanalysis" element={<BusinessAnalysis/>}/>
            <Route path="/communicationskills" element={<CommSkills/>}/>
            <Route path="/datascience" element={<DataScience/>}/>
            <Route path="/troubleshootingskills" element={<Troubleshooting/>}/>
            <Route path="/graphicsdesigning" element={<GraphicsDesigning/>}/>
          </Routes>
    </div>
  )
}

export default RoutesPath