import Script from 'next/script'
import Banner from '../components/Banner'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Cards from '../components/Card'
import Pricing from '../components/Pricing'
import Illustration from '../components/Illustration'

export default function Home() {
  return (
    <>
      <Nav />
      <div className="wrapper">
        <Banner />
        <Illustration />
        <Cards />
        <Pricing />
        <div className="section wf-section small" >
          <div className="container w-container">
            <div className="cta-box" style={{ padding: '180px 50px', background: 'url(/images/extro.png)', backgroundSize: "100% 100%" }}>
              <div style={{ paddingLeft: '2vw', width:'140%' }}>
                <h2 className="heading h2 bold-heading">Get started with LightSpeed</h2>
                <p className="paragraph medium" style={{paddingLeft: '3vw', maxWidth:'50vw'}}>Empower your teaching with tailored engaging content and assessments for your students.</p>
                <div className="spacer _16"></div>
                <a href="get-started" className="button white w-button">Get started now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      <Script src="template.js" type="text/javascript"></Script>

    </>
  )
}
