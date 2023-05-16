import React from "react";

export default function Cards() {

    return (
        <>
            <div className="section wf-section small">
                <div className="container w-container" >
                    <div  style={{ display: 'flex',  textAlign: 'center', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                        <div className="outline-text-card" style={{ background: 'url(images/swirly1.png)', backgroundSize: '100% 100%' }}>
                            <h2 className="heading h4" style={{ color: 'white', fontSize: '1.2rem', fontWeight: '500', textShadow: '3px 5px 3px rgba(144,241,255,0.7)' }}>Adjustable Question Quantity</h2>
                            <p className="paragraph" style={{ color: 'white', fontSize: '0.85rem', fontWeight: '280' }}>Easily select your desired number of questions with out interactive slider, tailoring assessments to your students' needs.</p>
                        </div>
                        <div className="outline-text-card" style={{ background: 'url(images/swirly2.png)', backgroundSize: '100% 100%' }}>
                            <h2 className="heading h4" style={{ color: 'white', fontSize: '1.2rem', fontWeight: '500', textShadow: '3px 5px 3px rgba(144,241,255,0.7)' }}>Customizable Editing Toolbar</h2>
                            <p className="paragraph" style={{ color: 'white', fontSize: '0.85rem', fontWeight: '280' }}>Effortlessly format and style assessmesnts using our intuitive toolbar, featuring essential editing functions like font selection, text formatting, and alignment.</p>
                        </div>
                        <div className="outline-text-card" style={{ background: 'url(images/swirly3.png)', backgroundSize: '100% 100%' }}>
                            <h2 className="heading h4" style={{ color: 'white', fontSize: '1.2rem', fontWeight: '500', textShadow: '3px 5px 3px rgba(144,241,255,0.7)' }}>Multiple Document Sizes/Fonts</h2>
                            <p className="paragraph" style={{ color: 'white', fontSize: '0.85rem', fontWeight: '280' }}>Select the perfect document size for your assessments, like A4, B2, Letter, and choose from a variety of file types, such as PDF, DOCX, or Pages, ensuring compatibility with your preferred document format.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section wf-section small">

                <div className="container w-container">
                    <div style={{ background: 'url(/images/comingsoon.png)', backgroundSize: '100% 100%', width: '100%' }}>

                        <h1 className="bold-heading" style={{ color: 'white', margin: '0', padding: '5px 3vw' }}>Coming Soon!</h1>

                    </div>
                </div>
            </div>
        </>
    )
}