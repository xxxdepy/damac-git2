
import React, { Component, useState, useEffect } from "react";

import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'



// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import HeadingTitle from '../components/HeadingTitle'
import FooterMoreLinks from '../components/FooterMoreLinks'
import PageTabs from '../components/PageTabs'
import ContactForm from '../components/ContactForm'

// import styles from '../styles/pages/Quick.module.css'




 // React Responsive
 import { isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';



// import styles from '../styles/.module.css'



// Banner image



// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


function CapitalHistory( { mobileDevice } ) {


  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  useEffect(() => {
      if ( isMobile ) {
        setDeviceIsMobile( true );
      }
   }, [])
 

  // Breadcrumbs links
  const crumbs = [
      {
        'label': 'Investor Relations',
        'link': '/investor-relations',
      },

      {
        'label': 'Capital History',
        'link': '/capital-history',
        'active': true
      }
  ];


  // Heading title btn
  const downloadBtn = {
    'title': 'Download PDF',
    'url': '#',
    'icon': 'arrow-down'
  }

  

  return (
    <div className='quickfactsheetbody'>

      <Head>
        <title>Capital History - Damac</title>

        <meta name="description" content="Capital History - Damac Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar navbarStyle='dark' className='navbar-dark'></Navbar>

      <main className="main main-regular capital-history">

        <Breadcrumbs crumbs={ crumbs }/>

        <HeadingTitle 
          title="Capital History" 
          btnLink={ downloadBtn } 
          deviceIsMobile={ deviceIsMobile }
          className='mb-0'
        >
          
        </HeadingTitle>

        <div className='container'>
            <PageTabs tabLinks={ [
                {
                    url: '/dividends',
                    label: 'Dividends',
                    active: false,
                },

                {
                    url: '/capital-history',
                    label: 'Capital History',
                    active: true,
                }
            ] }></PageTabs>
        </div>

        <section className='section'>
          <div className='container'>

             <div className='table-wrapper-dividend my-4'>
               <div className="table-main-wrap table-responsive">
                 <table class="table table-striped dm-graph-table">
                         <thead>
                           <tr>
                             <th>Share</th>
                             <th>Last</th>
                             <th>High</th>
                             <th>Low</th>
                             <th>(+/-)</th>
                             <th>%</th>
                             <th>Bid</th>
                             <th>Ask</th>
                             <th>Volume</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>10% shares dividend of 500 mn shares</td>
                             <td>1.34</td>
                             <td>1.36</td>
                             <td>1.33</td>
                             <td>-0.03</td>
                             <td>-2.19</td>
                             <td>1.33</td>
                             <td>1.34</td>
                             <td>1,085,775</td>
                           </tr>
                           <tr>
                             <td>Issuing, subscribing and full payment of 5,500 shares</td>
                             <td>1.34</td>
                             <td>1.36</td>
                             <td>1.33</td>
                             <td>-0.03</td>
                             <td>-2.19</td>
                             <td>1.33</td>
                             <td>1.34</td>
                             <td>1,085,775</td>
                           </tr>
                           <tr>
                             <td>10% shares dividend of 550 mn shares</td>
                             <td>1.34</td>
                             <td>1.36</td>
                             <td>1.33</td>
                             <td>-0.03</td>
                             <td>-2.19</td>
                             <td>1.33</td>
                             <td>1.34</td>
                             <td>1,085,775</td>
                           </tr>
                           <tr>
                             <td>Issuing, subscribing and full payment of 6,050 mn shares</td>
                             <td>1.34</td>
                             <td>1.36</td>
                             <td>1.33</td>
                             <td>-0.03</td>
                             <td>-2.19</td>
                             <td>1.33</td>
                             <td>1.34</td>
                             <td>1,085,775</td>
                           </tr>                       

                         </tbody>
                    </table>
               </div>
             </div>
             

             <div className='enquiry-form-section'>
               <div className='row'>
                 <div className='col-md-5'>
                   <h2>Send us an enquiry</h2>
                 </div>
                 <div className='col-md-7'>
                   <ContactForm initialValues={ {'gender': 'Mr'} }/>
                 </div>
               </div>
             </div>

            

          </div>
        </section>

        <FooterMoreLinks/>

      </main>

      <Footer></Footer>

      
    </div>
  )
}

export default CapitalHistory



export async function getStaticProps(context) {


  // Device React
  const deviceIsMobile = isMobile;
  const deviceType = deviceIsMobile;


  return {
    props: {
       mobileDevice: deviceType
    }, // will be passed to the page component as props
  }
}