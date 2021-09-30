
import React, { useState, useEffect } from "react";
import { renderToString } from 'react-dom/server'
import Image from 'next/image'
import Link from 'next/link'
import ActiveLink from './ActiveLink'


// React Responsive
import { Context as ResponsiveContext } from 'react-responsive'
import { useMediaQuery } from 'react-responsive'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';



// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'


export default function Navbar({ className, children, navbarStyle }) {




  
  // const slideOutMenu = {
  //   visible: false,
  // };

  const [slideOutMenuVisible, setMenuActive] = useState(false);


  const handleMenuToggle = (e) => {
    e.preventDefault();
    setMenuActive(!slideOutMenuVisible);
  }




  // Device React
  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  useEffect(() => {
      if ( isMobile ) {
        setDeviceIsMobile( true );
      }
   }, [])

  const isDesktopOrLaptopWidth = useMediaQuery(
       // { query: '(min-width: 768px)' }
       { minDeviceWidth: 768 },
       // { deviceWidth: ssrDeviceWidth}   
  );

  const isMobileWidth = useMediaQuery(
       { maxDeviceWidth: 767 }, 
       // { deviceWidth: ssrDeviceWidth }
  );







  let navbarLogo = "/images/damac-logo.png";

  if ( navbarStyle == 'dark' ) {
    navbarLogo = "/images/damac-logo-dark.png";
  }



  return (
    

    <header className={`damac-header damac-nav  ${className} ${ slideOutMenuVisible ? 'slideout-active' : 'slideout-not-active'} `}>
          

          { (deviceIsMobile) && 
            <div className={ `mobileNavContainer` }>
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-7">
                    <div className="damac-logo text-start">
                      <Link href="/">
                        <a className="damac-home-link">
                            <Image src={ navbarLogo } width={139} height={15}/>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="d-flex justify-content-end">
                      <div className="menuicon-wrapper">
                        <a href="#" className="mainmenutoggle" onClick={handleMenuToggle}></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }

          { (!deviceIsMobile) && 
            <div className="container">
              
              <div className="row">
                
            
                <div className="col-7 col-md-4 header-left-col align-items-center">
                  <div className="menuicon-wrapper">
                    <a href="#" className="mainmenutoggle" onClick={handleMenuToggle}>Menu</a>
                  </div>

                  <div className="damac-logo">
                    <Link href="/">
                      <a className="damac-home-link">
                          <Image src={ navbarLogo } width={139} height={15}/>
                      </a>
                    </Link>
                    
                  </div>

                </div>

                <div className="col-5 col-md-8 header-right-col">
                  
                  <div className="header-right-area d-flex justify-content-end">
                    <div className="header-item-wrapper not-on-mobile">
                      <a href="#" className="browseProperties">Browse Properties</a>
                    </div>

                    <div className="header-item-wrapper not-on-mobile">
                      <a href="#" className="btn btn-primary">Enquire</a>
                    </div>

                    <div className="header-item-wrapper not-on-mobile">

                      <div className="dropdown dropdown-item-outer language-dropdown">
                        <a href="#" className="dropdown-toggle"><span>English</span></a>
                        <ul className="dropdown-menu">
                          <li className="selected"><a className="dropdown-item" href="#">English</a></li>
                          <li className=""><a className="dropdown-item" href="#">French</a></li>
                          <li className=""><a className="dropdown-item" href="#">Espanol</a></li>
                        </ul>
                      </div>

                    </div>

                    <div className="header-item-wrapper d-flex align-items-center">
                      {/*
                      <a href="#" className="bookmark-icon">
                        <span>bookmark icon</span>
                      </a>
                      */}

                      <a href="#" className="bookmark-btn">
                        <span>
                          <FontAwesomeIcon icon={ faBookmark }/>
                        </span>
                      </a>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          }


          <div className={`main-menu-slideout ${ slideOutMenuVisible ? 'active' : 'not-active'}`}>
            <div className="inner">
              
              <div className="main-menu-inner d-flex flex-column justify-content-between">
                <div className="biglinks">
                  <ActiveLink href="/browse-properties" activeClassName="active">
                       <a>Browse Properties</a>
                  </ActiveLink>
                  <ActiveLink href="/about" activeClassName="active">
                       <a>About</a>
                  </ActiveLink>
                  <ActiveLink href="/contact" activeClassName="active">
                       <a>Contact</a>
                  </ActiveLink>
                </div>

                <div className="menulinks-cols">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-4 menu-list-col">
                        <ul className="menu-list">
                          <li>
                            <Link href="/chairmans-message">
                              <a>Chairman’s message</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/csr">
                              <a>CSR</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/news">
                              <a>News</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/rent">
                              <a>Rent</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/blog">
                              <a>Rent</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/faqs">
                              <a>FAQs</a>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-md-4 menu-list-col">
                        <ul className="menu-list">
                          <li><a href="#">Career</a></li>
                          <li><a href="#">Hotels and Resorts</a></li>
                          <li><a href="#">Sitemap</a></li>
                          <li><a href="#">Terms and Conditions</a></li>
                          <li><a href="#">Privacy Policy</a></li>
                          <li><a href="#">Agent Login</a></li>
                        </ul>
                      </div>

                      <div className="col-md-4 menu-list-col">
                        <ul className="menu-list">
                          <li><a href="#">Mortgage Assist</a></li>
                          <li><a href="#">Mortgage Calculator</a></li>
                          <li><a href="#">Customer Login</a></li>
                          <li><a href="#">Cookie Policy</a></li>
                          <li><a href="#">Building Documentation</a></li>
                          
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>

              </div>


            </div>
          </div>

    </header>


  )
}