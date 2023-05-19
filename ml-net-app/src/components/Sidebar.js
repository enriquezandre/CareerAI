import React from 'react';
import { useLocation } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const location = useLocation();
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
