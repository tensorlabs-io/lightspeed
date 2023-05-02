import React from 'react'

export default function Footer() {

    const handleTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (

        <div className="userFooter" style={{ background: '#001730' }}>
            <p>&copy; 2023 LightSpeed. All Rights Reserved. </p>
            <ul>
                <li><a href="#top" onClick={handleTop}>Top</a></li>
                <li><a href="/#Features">Features</a></li>
                <li><a href="/#Pricing">Pricing</a></li>
                <li><a href="/#FAQs">FAQs</a></li>
                <li><a href="/#Blog">Blog</a></li>
            </ul>
        </div>
    )
}