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
    <div className="userSidebar" style={{ minHeight: '92.85vh' }}>
      <div style={{ width: '145px', height: '150px', borderRadius: '50%', backgroundColor: '#D9D9D9' }}></div>
      <h3 style={{ textAlign: 'center' }}>
        {name} <br />
        <small style={{ fontSize: '1rem', color: '#90F1FF' }}>English Grammer</small>
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
