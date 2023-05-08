import React, { ReactNode } from 'react'
import { useEffect, useState } from 'react';

interface SideBarProps {
  children?: ReactNode;
}

export default function SideBar(props: SideBarProps) {
  const { children } = props;
  const [name, setName] = useState<string | null>()

  useEffect(() => {
    setName(localStorage.getItem('name'))
  }, [])
  
  return (
    <div className="userSidebar">
      <div style={{ width: '90px', height: '90px', borderRadius: '49%', backgroundColor: '#D9D9D9' }}></div>
      <h3 style={{ textAlign: 'center', fontSize: '1.2rem' }}>
        {name} <br />
        <small style={{ fontSize: '0.9rem', color: '#90F1FF' }}>English Grammer</small>
      </h3>



      {/* Render any child components passed to SideBar */}
      {children ?
        <div className="sidebar-child">{children}</div>
        :
        <a href="#" className="button white w-button" style={{ boxShadow: 'none', borderRadius: '5px' }}>My Library</a>
      }
    </div>
  );
}
