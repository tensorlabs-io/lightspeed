import React from 'react'
import Image from 'next/image'

export default function Banner(){
    return <div className="section hero-blue wf-section">
    <div className="container w-container">
      <div className="w-layout-grid hero-grid">
          <div className="text-box mobile-center">
            <h1 className="heading large-h1">Light Speed</h1>
            <div className="text-box _450px mobile-center">
                <p className="paragraph">Spend less time creating class notes and student assessments. LightSpeed is a teacher's best tool to seped up daily tasks.</p>
            </div>
            <div className="spacer _24"></div>
            <a href="#" className="button white w-button">Get started now</a>
          </div>
          <div id="w-node-fdba7448-e060-f785-c6a5-96d8248d753d-87f1cc13" className="hero-illustration-box">
            <Image src="/images/banner.png" width="452" height="452" alt=""/>
          </div>
      </div>
    </div>
</div>
}