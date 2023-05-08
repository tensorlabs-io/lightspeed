import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import { useRouter } from 'next/router'

export default function UserNav() {

  const router = useRouter()
  
  const logoutHandler = () => {
    localStorage.removeItem('authToken')
    router.push('/');
  }
  return (
    <div 
      data-collapse="small" data-animation="default" data-duration="400" 
      data-easing="ease" data-easing2="ease" role="banner" className="nav-bar w-nav">
      <div className="nav-container w-container">
        <div className="logo-div">
          <a href="/home" aria-current="page" className="nav-logo w-inline-block w--current">
            <img src="images/logo.png" alt="Logo" className="logo" />
          </a>
        </div>
        <nav role="navigation" className="nav-content w-nav-menu">
          <div className="nav-menu">
            
          </div>
          <div className="nav-cta-button-container">
            <a href="/home" className="w-nav-link userNavItem">
                <span>Home</span> <HomeIcon />
            </a>
            <a href="/content" className="w-nav-link userNavItem">
                <span>Create</span> <NoteAddIcon />
            </a>
            <a href="#" onClick={logoutHandler} className="w-nav-link userNavItem">
                <span>Account</span> <PersonIcon />
            </a>
            <a href="#" className="w-nav-link userNavItem">
                <span>Settings</span> <SettingsIcon />
            </a>
          </div>
        </nav>
        <div className="menu-button w-nav-button">
          <img src="images/hamburger.svg" loading="lazy" width="24" alt="" className="menu-icon" /></div>
      </div>
    </div>

  )
}