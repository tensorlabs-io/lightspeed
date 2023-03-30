import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Banner from '../components/Banner'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Cards from '../components/Card'
import Pricing from '../components/Pricing'

export default function Home() {
  return (
    <>
      <Head>
        <title>LightSpeed</title>
        <meta name="description" content="LightSpeed = AI Document Creator & Assessment Creator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="template.css" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/" rel="preconnect" />
        <link href="https://fonts.gstatic.com/" rel="preconnect" crossOrigin="anonymous" />
        <Script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></Script>
        <Script type="text/javascript" src="font.js"></Script>
      </Head>

      <Nav />
      <div className="wrapper">
        <Banner />
        <div className="section small wf-section">
          <div className="container w-container">
            <div className="w-layout-grid feature-grid">
              <img className="full-height-image" src="https://assets.website-files.com/6398008a5a4ad6e37cf1cc10/63982826c9353e21cca459d0_windows-97pJ_0CkVEY-unsplash.webp" width="431" height="90" data-ix="fade-in-on-scroll" />
              <div className="full-height-text-box">
                <div className="top-height-title">
                  <h2 className="heading h2">Create Content, Assesmesnts and even Class Notes</h2>
                </div>
                <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="light-tick-list w-richtext">
                  <ul role="list">
                    <li>Unique Content Generation</li>
                    <li>Difficulty Levels</li>
                    <li>Variations & Control</li>
                  </ul>
                </div>
                <div className="spacer _16"></div>
                <a href="#" className="button w-button">Get started now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="section wf-section">
          <div className="container w-container">
            <div>
              <div className="text-box">
                <h2 className="heading h2">Writing, automated</h2>
                <p className="paragraph medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="spacer _48"></div>
              <div className="w-layout-grid _4-grid">
                <div className="text-box">
                  <img src="https://assets.website-files.com/6398008a5a4ad6e37cf1cc10/63993b3f4cdf4846cfd020ae_Robot.svg" alt="" className="card-icon" />
                  <h3 className="heading h4">Automate it all</h3>
                  <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div className="text-box">
                  <img src="https://assets.website-files.com/6398008a5a4ad6e37cf1cc10/63993b3fbb82c56213f77a22_GitPullRequest.svg" alt="" className="card-icon" />
                  <h3 className="heading h4">Know your options</h3>
                  <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloretro.</p>
                </div>
                <div className="text-box">
                  <img src="https://assets.website-files.com/6398008a5a4ad6e37cf1cc10/6398305bd9d4a15736f45fb5_ShieldChevron.svg" alt="" className="card-icon" />
                  <h3 className="heading h4">Dependable</h3>
                  <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum.</p>
                </div>
                <div className="text-box">
                  <img src="https://assets.website-files.com/6398008a5a4ad6e37cf1cc10/6398305babd85e9c72c475b2_Coins.svg" alt="" className="card-icon" />
                  <h3 className="heading h4">Templates</h3>
                  <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et consectetur.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section grey wf-section">
          <div className="container w-container">
            <div className="text-box">
              <h2 className="heading h2">Generate killer content, effortlessly</h2>
            </div>
            <div className="spacer _16"></div>
            <div data-duration-in="300" data-duration-out="100" data-current="Tab 2" data-easing="ease" className="horizontal-tabs w-tabs">
              <div className="tabs-text-boxes w-tab-menu">
                <a data-w-tab="Tab 2" data-w-id="82337e00-8b8e-ecbd-5533-9b2b07b2cca0" className="tab-text-box w-inline-block w-tab-link w--current">
                  <img style={{ opacity: 0.3 }} loading="lazy" alt="" src="https://assets.website-files.com/6398008a5a4ad6e37cf1cc10/63993b3f093252c6480da6bd_Cpu.svg" className="icon tab" />
                  <div className="tab-info-box">
                    <h3 className="heading h5">Option 1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                  <img src="https://assets.website-files.com/6398008a5a4ad6e37cf1cc10/6399356ebb82c51db0f707be_Down Arrow.svg" alt="" className="tab-dropdown-icon" />
                </a>
                <a data-w-tab="Tab 1" data-w-id="82337e00-8b8e-ecbd-5533-9b2b07b2cc97" className="tab-text-box w-inline-block w-tab-link">
                  <img style={{ opacity: 0.3 }} loading="lazy" alt="" src="https://assets.website-files.com/6398008a5a4ad6e37cf1cc10/63993b3e4cdf4814a3d020ad_Gauge.svg" className="icon tab" /><img src="https://assets.website-files.com/6398008a5a4ad6e37cf1cc10/6399356ebb82c51db0f707be_Down Arrow.svg" alt="" className="tab-dropdown-icon" />
                  <div className="tab-info-box">
                    <h3 className="heading h5">Option 2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </a>
                <a data-w-tab="Tab 5" data-w-id="1a919bf6-369c-11e4-9bdf-898aa73ef921" className="tab-text-box w-inline-block w-tab-link">
                  <img style={{ opacity: 0.3 }} loading="lazy" alt="" src="https://assets.website-files.com/6398008a5a4ad6e37cf1cc10/63993b3f6c4ddc30951145bc_HourglassSimpleMedium.svg" className="icon tab" />
                  <div className="tab-info-box">
                    <h3 className="heading h5">Option 4</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                  <img src="https://assets.website-files.com/6398008a5a4ad6e37cf1cc10/6399356ebb82c51db0f707be_Down Arrow.svg" alt="" className="tab-dropdown-icon" />
                </a>
              </div>
              <div className="tabs-images w-tab-content">
                <div data-w-tab="Tab 2" className="tab-pane w-tab-pane w--tab-active"><img width="481" sizes="(max-width: 767px) 92vw, (max-width: 991px) 94vw, (max-width: 1279px) 48vw, 573.0625px" alt="" src="https://assets.website-files.com/6398008a5a4ad6e37cf1cc10/6398282692a9bd79a1eecafc_windows-241bwQl2uWE-unsplash.webp" loading="lazy" className="right-tab-image" /></div>
                <div data-w-tab="Tab 1" className="tab-pane w-tab-pane"><img width="481" sizes="(max-width: 767px) 92vw, (max-width: 991px) 94vw, (max-width: 1279px) 48vw, 599.6875px" alt="" src="https://assets.website-files.com/6398008a5a4ad6e37cf1cc10/639828266215ce49d10d67bf_surface-S_YOuAUMm2o-unsplash.webp" loading="lazy" className="right-tab-image" /></div>
                <div data-w-tab="Tab 5" className="tab-pane w-tab-pane"><img width="481" sizes="(max-width: 767px) 92vw, (max-width: 991px) 94vw, (max-width: 1279px) 48vw, 599.6875px" alt="" src="https://assets.website-files.com/6398008a5a4ad6e37cf1cc10/63982826613a2725cb7b0c03_microsoft-edge-fb_wM334yYQ-unsplash.webp" loading="lazy" className="right-tab-image" /></div>
              </div>
            </div>
          </div>
        </div>
        <Cards />

        <Pricing />
        <div className="section wf-section">
          <div className="container w-container">
            <div className="cta-box">
              <div className="cta-text-box">
                <h2 id="w-node-df25bafc-bbda-a924-0cad-0deb1912000c-19120008" className="heading h2">Get started with Lightspeed</h2>
                <p className="paragraph medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <div className="spacer _16"></div>
                <a href="get-started" className="button white w-button">Get started now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Script src="jquery.js"></Script>
      <Script src="template.js" type="text/javascript"></Script>

    </>
  )
}
