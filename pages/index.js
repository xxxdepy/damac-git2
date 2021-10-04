// React
import React, { useState, useEffect } from "react";
import Head from 'next/head'
import Image from 'next/image'



// Navbar
import Navbar from '../components/navbar'
import HomeBanner from '../components/HomeBanner'
import CookieConsent from '../components/CookieConsent'

import styles from '../styles/Home.module.css'




// React Responsive
import { Context as ResponsiveContext } from 'react-responsive'
import { useMediaQuery } from 'react-responsive'
import { BrowserView, MobileView, isBrowser, isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';





// Static imports
import bannerImage from '../public/images/hero-image-sm.png'




export default function Home() {
  // 

  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  useEffect(() => {
      if ( isMobile ) {
        setDeviceIsMobile( true );
      }
   }, [])

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

          <>
            { (!deviceIsMobile) &&
              <HomeBanner bannerImage={ bannerImage }></HomeBanner>
            }

            { (deviceIsMobile) &&
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
          </>



          <CookieConsent/>
          
        
      </main>

      
    </div>
  )
}


export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}