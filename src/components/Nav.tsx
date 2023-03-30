import React from 'react'

export default function Nav(){


    return <div data-collapse="small" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="nav-bar w-nav">
    <div className="nav-container w-container">
        <div className="logo-div">
          <a href="/" aria-current="page" className="nav-logo w-inline-block w--current">
            <img src="images/logo.png" width="150" height="150" alt="Logo" className="logo"/>
          </a>
        </div>
        <nav role="navigation" className="nav-content w-nav-menu">
          <div className="nav-menu">
              {/* <a href="#" className="nav-link w-nav-link">Link 1</a>
              <a href="#" className="nav-link w-nav-link">Link 2</a>
              <a href="#" className="nav-link w-nav-link">Link 3</a>
              <a href="#" className="nav-link w-nav-link">Link 4</a>
              <div data-hover="true" data-delay="0" className="dropdown w-dropdown">
                <div className="nav-dropdown w-dropdown-toggle">
                    <div className="dropdown-toggle-text">More</div>
                    <div className="dropdown-arrow w-icon-dropdown-toggle"></div>
                </div>
                <nav className="dropdown-list w-dropdown-list">
                  <a href="#" className="nav-link w-dropdown-link">Sub-link 1</a>
                  <a href="#" className="nav-link w-dropdown-link">Sub-link 2</a>
                </nav>
              </div> */}
          </div>
          <div className="nav-cta-button-container">
            <a href="#" className="nav-link w-nav-link">Login</a>
            <a href="#" className="nav-link primary w-nav-link">Register</a>
          </div>
        </nav>
        <div className="menu-button w-nav-button">
          <img src="images/hamburger.svg" loading="lazy" width="24" alt="" className="menu-icon"/></div>
    </div>
  </div>


}