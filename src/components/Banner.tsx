import React from 'react'

export default function Banner() {
  return (
    <>
      <div className="section small wf-section" >
        <div className="container w-container" >
          <div style={{ padding: '5vw', height: '50vh', background: "url(/images/Light-speed-road.png)", backgroundSize: "100% 100%" }}>
            <h1 className="heading large-h1 bold-heading" style={{color: 'white'}}>
              <i>LightSpeed</i>
            </h1>
            <div>
              <p className="paragraph" style={{ color: 'white', maxWidth: '55vw', paddingLeft: '5vw' }}>Automate your lesson planning with LightSpeed, the ultimate tool for English teachers to create class material and assessments quickly and efficiently.</p>
            </div>
            <div className="spacer _24"></div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <a href="/signup" className="button white w-button" style={{ padding: '15px 40px', boxShadow:'3px 3px 3px 1.5px rgba(217,217,217,0.7)' }}>Get started now</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}