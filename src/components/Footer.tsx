import React from 'react'

export default function Footer() {

    const handleTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (

        <div className="footer wf-section" style={{ background: '#001730' }}>
            <div className="footer-container w-container">
                <div className="w-layout-grid footer-grid">
                    <div className="logo-div">
                        <a href="/" aria-current="page" className="nav-logo w-inline-block w--current">
                            <img src="images/logo.png" width="250" height="200" alt="Logo" className="logo"
                            />
                        </a>
                    </div>
                    <div className="footer-links-container">
                        <a href="#" className="footer-link">Features</a>
                        <a href="#" className="footer-link">Pricing</a>
                        <a href="#" className="footer-link">FAQs</a>
                        <a href="#" className="footer-link">Blog</a>
                    </div>
                    <div className="footer-links-container">
                        <a href="/signup" className="footer-link">Sign Up</a>
                        <a href="/login" className="footer-link">Login</a>

                    </div>
                    <div className="footer-links-container">
                        <a href="#top" className="footer-link" onClick={handleTop}>Go to Top</a>
                    </div>

                </div>
            </div>
        </div>
    )
}