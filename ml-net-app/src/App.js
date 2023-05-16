import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'  
import Navigationbar from './components/NavigationBar'

function App() {
  return (
    <div className='App'>
      <Navigationbar />
      <Sidebar />
    </div>
  )
}

export default App