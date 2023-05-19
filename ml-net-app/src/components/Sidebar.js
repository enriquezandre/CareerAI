import React from 'react';
import { useLocation } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const location = useLocation();// then inside your component:
  const navigate = useNavigate();

  return (
    <div className='Sidebar'>
      <ul className='SidebarList'>
        {SidebarData.map((val, key) => {
          return (
            <li 
              key={key} 
              className='row'
              id={location.pathname === val.link ? "active" : ""}
              onClick={() => {
                // Navigate to the new page without causing a full page reload
                navigate(val.link);
              }}
            >
              <div id='icon'>{val.icon}</div> 
              <div id='title'> {val.title} </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
