import { Routes, Route } from 'react-router-dom';
import DbFundamentals from '../pages/DbFundamentals';
import Home from '../pages/Home';

function RoutesPath() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/databasefundamentals" element={<DbFundamentals/>}/>
          </Routes>
    </div>
  )
}

export default RoutesPath