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
                    <div id="w-node-b66374b8-a69d-2cb6-3980-23c2cf3fcb8a-cf3fcb86" className="footer-logo-box">
                        <a data-ix="logo" href="/" aria-current="page" className="footer-logo w-nav-brand w--current">
                            <img src="/images/logo.png" width="250" height="200" alt=""
                                style={{ transform: 'translate(-100%,0)' }} />
                        </a>
                        <span style={{ color: '#fff' }}>© 2023 LightSpeed. All Rights Reserved.</span>
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