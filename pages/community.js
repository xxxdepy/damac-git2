
import React, { Component, useState, useEffect } from "react";

import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import styles from '../styles/pages/Community.module.css'




 // React Responsive
 import { Context as ResponsiveContext } from 'react-responsive'
 import { useMediaQuery } from 'react-responsive'
 import { BrowserView, MobileView, isBrowser, isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';



// import styles from '../styles/.module.css'



// Banner image

// Static import
import pageBanner from '../public/images/community-bg.jpg'



// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


function Community() {


  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  useEffect(() => {
      if ( isMobile ) {
        setDeviceIsMobile( true );
      }
   }, [])

  // 

  const isDesktopOrLaptop = useMediaQuery(
       { minDeviceWidth: 768 },
       // { deviceWidth: 768 } // `device` prop
  );

  const isMobileWidth = useMediaQuery(
       { maxDeviceWidth: 767 },
       // { deviceWidth: 767 } // `device` prop
  );

  return (
    <div className='communitybody'>

      <Head>
        <title>Community - Damac</title>

        <meta name="description" content="Community - Damac Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar></Navbar>


      <main className="main about-main">


        <header className={styles['community-banner']}>
          <div className={styles['bg-image']}>
            <Image 
              className={styles['bg-image']}
              src={pageBanner} width={1600} 
              height={700}
              placeholder="blur"
              layout="fill"
            >
              
            </Image>
          </div>
          <div className={styles['bottom-gradient']}></div>

          <div className={`container ${styles['bottom-flex']}`}>
            <div className={styles['community-banner-text']}>
              
              <div className={ styles['banner-text-left'] }>
                <div>
                  <h1>DAMAC Hills</h1>
                  <p><span>Your second home around the world.</span></p>
                </div>

                <div className={ styles['location-community'] }>
                  <a href="#">
                     <span className={styles['text-icon']}>
                       <Image src="/images/icons/location.png" width={16} height={16}/> 
                     </span>
                     Dubailand, Dubai, United Arab Emirates
                  </a>
                </div>
              </div> 

              <div className={ styles['banner-text-right'] }>
                <div className="btn-list">
                  <Link href="#">
                    <a className="btn btn-dark-blur">
                      <span>Download Brochure</span>
                    </a>
                  </Link>

                  <Link href="#">
                    <a className="btn btn-dark-blur">
                      <span>View Gallery (19)</span>
                    </a>
                  </Link>
                </div>
              </div>

            </div>
          </div>


        </header>



        <section className={`damac-section text-image-section`}>
          
          <div className={`container`}>

              <div class={`text-wrapper`}>
                
                <div className="top-text">
                  <h2>Shaping the highest standard of living</h2>
                  <p>Live your story amongst a spectacular mix of culture and leisure attractions that are sure to leave you astounded, and retreat to your luxurious haven whenever you want to take a break.</p>
                </div>

                <div className="section-data-boxes">
                  <div className="data-box">
                    <h2 className="heading-medium">4200 sqft.</h2>
                    <p>Starting area</p>
                  </div>
                  <div className="data-box">
                    <h2 className="heading-medium">1 - 5</h2>
                    <p>Bedrooms</p>
                  </div>
                  <div className="data-box">
                    <h2 className="heading-medium">1,158,888</h2>
                    <p>AED</p>
                  </div>
                </div>

      
              </div>

          </div>

          

          { !deviceIsMobile && 
            <div className={`containerRightImage`}>
              <Image src='/images/textsection-right-1.jpg' layout='fill' objectFit="cover"/>
            </div>
          }

          { deviceIsMobile && 
            <div className={`containerBottomImage`}>
              <Image src='/images/textsection-right-1.jpg' layout='fill' objectFit="cover"/>
            </div>
          }


        </section>


        <>
            {  
              <div className='community-booking-bar'>
                
                <div className='container'>
                  
                  <div className='booking-bar-row'>
                    <div className='left-area'>
                      <ul className='booking-details-items'>
                        <li>
                          <h5>AED 1,512,221</h5>
                          <div className='lbl'>Starting from</div>
                        </li>

                        {!deviceIsMobile && 
                          <>
                          <li>
                            <h5>Dubai Marina</h5>
                            <div className='lbl'>Locality</div>
                          </li>
                          <li>
                            <h5>Ready to Move In</h5>
                            <div className='lbl'>Status</div>
                          </li>
                          </>
                        }

                      </ul>
                    </div>
                    <div className='right-area'>
                      
                      <div className='booking-btns'>
                        <a className='btn btn-primary btn-icon'>
                          <span className='fa-icon'>
                            <FontAwesomeIcon icon={faEnvelope}/>
                          </span>
                          <span className='btnlabel'>Schedule a call-back</span>
                        </a>

                        <a className='btn btn-primary-outline btn-icon'>
                          <span className='fa-icon'>
                            <FontAwesomeIcon icon={faWhatsapp}/>
                          </span>
                          <span className='btnlabel'>WhatsApp</span>
                        </a> 
                      </div>

                    </div>
                  </div>

                </div>

              </div>
            }
        </>




        
      </main>

      <Footer></Footer>

      
    </div>
  )
}

export default Community