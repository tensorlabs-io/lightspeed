import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
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

        <div className='logo-container'>
          <a href="/home" aria-current="page">
            <img src="images/logo.png" alt="Logo" className="logo" />
          </a>
        </div>
        <nav role="navigation" className="nav-content w-nav-menu">
          <div className="nav-menu">
            
          </div>
          <div className="nav-cta-button-container">
            <a href="/home" className="w-nav-link userNavItem">
                <span>Home</span> <HomeOutlinedIcon />
            </a>
            <a href="/content" className="w-nav-link userNavItem">
                <span>Create</span> <NoteAddOutlinedIcon />
            </a>
            <a href="#" onClick={logoutHandler} className="w-nav-link userNavItem">
                <span>Account</span> <PersonOutlinedIcon />
            </a>
            <a href="#" className="w-nav-link userNavItem">
                <span>Settings</span> <SettingsOutlinedIcon />
            </a>
          </div>
        </nav>
        <div className="menu-button w-nav-button">
          <img src="images/hamburger.svg" loading="lazy" width="24" alt="" className="menu-icon" /></div>
      </div>
    </div>

  )
}