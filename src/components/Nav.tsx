import React from 'react'

export default function Nav() {


  return (
    <div 
      data-collapse="small" data-animation="default" data-duration="400" 
      data-easing="ease" data-easing2="ease" role="banner" className="nav-bar w-nav">
      <div className="nav-container w-container">
        <div className="logo-div">
          <a href="/" aria-current="page" className="nav-logo w-inline-block w--current">
            <img src="images/logo.png" width="250" height="200" alt="Logo" className="logo" 
            style={{ transform: 'translate(-100%,0)' }}/>
          </a>
        </div>
        <nav role="navigation" className="nav-content w-nav-menu">
        <div className="nav-menu">
          </div>
          <div className="nav-cta-button-container">
            <a href="/login" className="nav-link w-nav-link" style={{ width: '120px', textAlign: 'center'}}>Login</a>
            <a href="/signup" className="nav-link primary w-nav-link" style={{ width: '120px', textAlign: 'center'}}>Sign Up</a>
          </div>
        </nav>
        <div className="menu-button w-nav-button">
          <img src="images/hamburger.svg" loading="lazy" width="24" alt="" className="menu-icon" /></div>
      </div>
    </div>

  )
}