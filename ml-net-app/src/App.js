import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'  
import Navigationbar from './components/NavigationBar'
import RoutesPath from './components/RoutesPath';

function App() {
  return (
    <div className='App'>
      <Navigationbar />
      <div className="content-wrapper">
        <Sidebar />
        <div className="main-content">
          <RoutesPath/>
        </div>
      </div>
    </div>
  );
}

export default App