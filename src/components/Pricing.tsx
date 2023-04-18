import React from 'react'

export default function Pricing() {
    return (

        <div className="container w-container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', background: '#90f1ff', padding: '1vw', paddingLeft: '3vw' }}>
                <div>
                    <h1 className="heading bold-heading" style={{ color: 'white', margin: '0', padding: '0' }}>Versions</h1>
                </div>
                <div>
                    <p className="paragraph" style={{ margin: '0', padding: '0', fontSize: '1rem', letterSpacing: '1px' }}>
                        LightSpeed offers 3 membership options
                    </p>
                </div>

            </div>
            <div className="spacer _32"></div>
            <div className="w-layout-grid _3-grid">
                <div data-w-id="82e37bf4-6256-9574-5cea-02ad52a48179" style={{ textAlign: 'center', border: '4px solid #90f1ff', opacity: "1", transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }} className="pricing-card">
                    <h2 className="heading h3 bold-heading blueShadow"><i>LS 1</i></h2>
                    <p className="paragraph">Content Creator + Assessment Generator</p>
                    <div className="spacer _16"></div>
                    <a href="#" className="button w-button">Try now !</a>
                    <div className="spacer _24"></div>
                    <div className="tick-list w-richtext">
                        <ul role="list" style={{ marginLeft: '15px', textAlign:'left'}}>
                            <li>Content generation</li>
                            <li>Assessment Geneartor</li>
                            <li>Direct feedback with Lightspeed team</li>
                        </ul>
                    </div>
                </div>
                <div data-w-id="82e37bf4-6256-9574-5cea-02ad52a48195" style={{ display:'flex', textAlign: 'center', border: '4px solid #90f1ff', opacity: "1", transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }} className="pricing-card">

                    <h2 className="heading h3 bold-heading blueShadow"><i>LS 2</i></h2>
                    <p className="paragraph">Everything in LS 1 + Teacher Notes</p>
                    
                    <div className="spacer _16"></div>
                    <a href="#" className="outline">Coming Soon...</a>
                    <div className="spacer _24"></div>
                    <div className="tick-list w-richtext" style={{ flexGrow: '1', display: 'flex', alignItems: 'flex-end' }}>
                        <ul role="list" style={{ marginLeft: '15px', textAlign:'left'}}>
                            <li>Content Generation</li>
                            <li>Assessment Generator</li>
                            <li>Plus more customization</li>
                        </ul>
                    </div>
                </div>
                <div data-w-id="82e37bf4-6256-9574-5cea-02ad52a481b8" style={{ display:'flex', textAlign: 'center', border: '4px solid #90f1ff', opacity: "1", transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }} className="pricing-card">
                    <h2 className="heading h3 bold-heading blueShadow"><i>LS 3</i></h2>
                    <p className="paragraph">Everything in LS 2 + </p>
                    
                    <div className="spacer _16"></div>
                    <a href="#" className="outline">Coming Soon...</a>
                    <div className="spacer _24"></div>
                    <div className="tick-list w-richtext" style={{ flexGrow: '1', display: 'flex', alignItems: 'flex-end' }}>
                        <ul role="list" style={{ marginLeft: '15px', textAlign:'left'}}>
                            <li>Content generation</li>
                            <li>Assessment Generator</li>
                            <li>Exclusive features</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}