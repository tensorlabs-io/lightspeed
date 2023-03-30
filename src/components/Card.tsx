import React from "react";

export default function Cards() {

    return (
        <div className="section wf-section">
            <div className="container w-container">
                <div className="_3-grid">
                    <div className="outline-text-card">
                        <img src="/images/card1.svg" alt="" className="card-icon black" />
                        <h2 className="heading h4">Card 1</h2>
                        <p className="paragraph">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="outline-text-card">
                        <img src="/images/card2.svg" alt="" className="card-icon black" />
                        <h2 className="heading h4">Card 2</h2>
                        <p className="paragraph">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="outline-text-card">
                        <img src="/images/card3.svg" alt="" className="card-icon black" />
                        <h2 className="heading h4">Card 3</h2>
                        <p className="paragraph">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}