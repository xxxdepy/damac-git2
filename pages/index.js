import Head from 'next/head'
import Image from 'next/image'

// Navbar
import Navbar from '../components/navbar'
import HomeBanner from '../components/HomeBanner'

import styles from '../styles/Home.module.css'




// React Responsive
import { Context as ResponsiveContext } from 'react-responsive'
import { useMediaQuery } from 'react-responsive'

export default function Home() {
  // 

  const isDesktopOrLaptop = useMediaQuery(
       { minDeviceWidth: 768 },
       // { deviceWidth: 769 } // `device` prop
  );

  const isMobileWidth = useMediaQuery(
       { maxDeviceWidth: 767 },
       // { deviceWidth: 767 } // `device` prop
  );




  return (
    <div className='homebody'>

      <Head>
        <title>Damac - Home</title>
        <meta name="description" content="Damac Properties" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar></Navbar>


      <main className="main home-main">

          { isDesktopOrLaptop &&
            <HomeBanner bannerImage={ `/images/hero-image-sm.png` }></HomeBanner>
          }

          { !isDesktopOrLaptop &&
            <div className="homeMobileBanner">
              <div className="container">
                
                <div className="homemobileBannerText">
                  <h3>Golf Town at DAMAC Hills</h3>
                  <p>Your second home around the World</p>
                </div>

                <div className="bannerBtnGroup">
                  <a className="d-block btn btn-primary cta-btn">
                    <span>Discover more</span>
                  </a>

                  <a className="d-block btn cta-btn cta-btn-link">
                    <span>Explore Now</span>
                  </a>
                </div>

              </div>
            </div>
          }




          <div className="cookie-consent-bar">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-8">
                  <p>We are using cookies to give you the best experience on our website. You can find out more about which cookies we are using by reading our Cookie policy - Privacy Policy</p>
                </div>
                <div className="col-4 col-md-4 text-end">
                  <a href="#" className="btn btn-primary">Accept</a>
                </div>
              </div>
            </div>
          </div>

          
        
      </main>

      
    </div>
  )
}
