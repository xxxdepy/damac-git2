import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import HeroSection from '../components/HeroSection'

import Footer from '../components/Footer'


import React, { Component } from "react";

// import styles from '../styles/.module.css'

import TextSection from '../components/text-section'




function WhyDubai() {
  return (
    <div className='whydubaibody'>

      <Head>
        <title>Damac - Why Dubai</title>
        <meta name="description" content="Why Dubai - Damac Properties" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar></Navbar>


      


      <main className="main about-main">
       

       <HeroSection
         bannerImage={ `/images/careerpagebanner.png` }
       >

           <div className="banner-conent-style-1">
             <div className="bg"></div>
             <div className="container">
               
               <div className="row">
                 <div className="col-md-7">
                   <div className="banner-text-body">
                     <h3>The World's Most Exciting Investment Destination</h3>
                     <p>As a Company born in the United Arab Emirates, DAMAC Properties believes in giving back to the country that has played such a seminal role in its success story. DAMAC and its Chairman.</p>
                   </div>
                 </div>
               </div>

             </div>
           </div>
         
       </HeroSection>


       <TextSection className="text-section-whhydubai-1">
         <div className="row">
           <div className="col-md-5">
             <h3>Dubai's Success in Numbers</h3>
           </div>
           <div className="col-md-7">
             <div className="dubais-success-icons">
               <div className="row">
                 
                 <div className="col-4">
                   <div className="icon-box">
                     <img src="/images/icons/building 1.png"/>
                     <h3>30.1M</h3>
                     <p>Occupied room nights in 2018</p>
                   </div>
                 </div>
                 <div className="col-4">
                   <div className="icon-box">
                     <img src="/images/icons/building 1.png"/>
                     <h3>#1</h3>
                     <p>The World's busiest international airport</p>
                   </div>
                 </div>
                 <div className="col-4">
                   <div className="icon-box">
                     <img src="/images/icons/building 1.png"/>
                     <h3>15.9M</h3>
                     <p>Visitors annually</p>
                   </div>
                 </div>
                 <div className="col-4">
                   <div className="icon-box">
                     <img src="/images/icons/building 1.png"/>
                     <h3>$29.7B</h3>
                     <p>#1 in Worldwide visitor spend</p>
                   </div>
                 </div>
                 <div className="col-4">
                   <div className="icon-box">
                     <img src="/images/icons/building 1.png"/>
                     <h3>26%</h3>
                     <p>Projected visitor growth</p>
                   </div>
                 </div>
                 <div className="col-4">
                   <div className="icon-box">
                     <img src="/images/icons/building 1.png"/>
                     <h3>15.9M</h3>
                     <p>Visitors annually</p>
                   </div>
                 </div>

               </div>
             </div>
           </div>
         </div>
       </TextSection>


       <section className="why-dubai-section-2">
         <div className="container">
           <div className="row">
               <div className="col-6 mb-4">
                 <h3>Dubai: A Safe Haven and the Region's Most Dynamic City</h3>

               </div>
           </div>

           <div className="row">
               <div className="col-6 mb-2">
                 <p>Dubai is considered one of the safest cities in the world, while the UAE is an economic and political safe haven and a beacon of stability in the Middle East. Dubai was ranked the best city for quality of living and public infrastructure across the Middle East and Africa (MEA) region in Mercer’s 2018 Quality of Living Survey. </p>
               </div>
               <div className="col-6 mb-2">
                 <p>The city took 74th place in the global ranking, making it the MEA region’s top city for the fifth year running. Dubai is a magnet for foreign talent and multinational companies that view the city as the ideal location from which to serve to markets across the MEA region.</p>
               </div>
           </div>
         </div>
       </section>


       <section>
         <img src='/images/why-dubai/dubaipalm.jpg' className="img-responsive full-width"/>
       </section>


       <section className="why-dubai-section-3">
         <div className="container">
           <div className="row">
               <div className="col-6 mb-4">
                 <h3>Dubai’s Most Exciting Districts</h3>

               </div>
           </div>

           <div className="dubai-districts-items">
             <div className="dubai-district-item">
               <div className="row justify-content-between">
                   <div className="col-6 mb-2">
                     <p>With its world-famous skyline, enviable lifestyle and premium attractions, Dubai is a destination unlike any other on the planet. The First Group’s upper midscale hotels and premium residences are situated in prime locations in</p>
                   </div>
                   <div className="col-5 mb-2 pb-5">
                     <p>Dubai’s most exciting and popular districts, including Dubai Marina and Business Bay, ensuring high occupancy rates and consistent revenues.</p>
                   </div>
               </div>

               <div className="row justify-content-between">
                   <div className="col-6 mb-2">
                     <h4>Dubai Marina</h4>
                   </div>
                   <div className="col-5 mb-2">
                     <p>Introducing Dubai Marina, the world's largest man-made marina, featuring a breathtaking combination of reflective waterways, al fresco dining, waterside promenades and glittering developments. Dubai Marina is home to four of our world-class developments – Wyndham Dubai Marina, which </p>
                   </div>
               </div>
             </div>
           </div>


           <div className="district-items-nav">
             <div className="row justify-content-between align-items-center">
               <div className="col-md-9">
                 <ul className="district-items-nav-list">
                   <li><a href="#" className="active">Dubai Marina</a></li>
                   <li><a href="#">Business Bay </a></li>
                   <li><a href="#">Jumeirah Village</a></li>
                   <li><a href="#">Barsha Heights</a></li>
                   <li><a href="#">Dubai Sports City</a></li>

                 </ul>
               </div>
               <div className="col-md-auto">
                 <div className="text-md-right text-center">
                   <div className={`sliderArrows sliderArrowsDark`}>
                     <a href="#" className="sliderArrow">
                       <span><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  d="M8.75 15.875L1.875 9L8.75 2.125" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        </span>
                     </a>
                     <a href="#" className="sliderArrow">
                       <span><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  d="M2.25 2.125L9.125 9L2.25 15.875" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                        </span>
                     </a>
                   </div>
                 </div>
               </div>
             </div>
           </div>

         </div>
       </section>


       <TextSection className="text-section-whhydubai-investorsfav">
         <div className="row justify-content-center">
           <div className="col-md-4">
             <div className="icon-box">
               <div className="text-center">
                 <img src="/images/why-dubai/city.svg"/>
               </div>
               <h4>Premium Developers</h4>
               <p>DAMAC develops quality investment properties in high-demand locations</p>
             </div>
           </div>
           <div className="col-md-4">
             <div className="icon-box">
               <div className="text-center">
                 <img src="/images/why-dubai/stars.svg"/>
               </div>
               <h4>Most Renowned Brands</h4>
               <p>Our interior is designed by world’s most renowned brands</p>
             </div>
           </div>
           <div className="col-md-4">
             <div className="icon-box">
               <div className="text-center">
                 <img src="/images/why-dubai/file-invoice-dollar.svg"/>
               </div>
               <h4>USD returns</h4>
               <p>Our property assets deliver great returns to our investors in a stable currency</p>
             </div>
           </div>
         </div>
       </TextSection>



       <TextSection className="text-section-whhydubai-4">
         <div className="row justify-content-between">
           <div className="col-md-3">
             <h3>An Investor’s Favourite</h3>
           </div>
           <div className="col-md-5">
             <p>High-yielding assets, a world-class regulatory environment and ultra-modern infrastructure – these factors have made Dubai one of the most-popular investment destinations on the planet. Dubai’s stated ambition to become the world’s most-visited destination by 2025 means there’s never been a better time to invest in the city’s thriving hotel industry. Speak to us today about the incredible opportunities available.</p>
           </div>
         </div>
       </TextSection>


       <section className="why-dubai-section-then-now">
         <div className="container">
           <div className="row justify-content-between mb-4">
               <div className="col-12">
                 <div className={`sliderArrows sliderArrowsDark`}>
                   <a href="#" className="sliderArrow">
                     <span><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path  d="M8.75 15.875L1.875 9L8.75 2.125" stroke="white" strokeLidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      </span>
                   </a>
                   <a href="#" className="sliderArrow">
                     <span><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path  d="M2.25 2.125L9.125 9L2.25 15.875" stroke="white" strokeLidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>

                      </span>
                   </a>
                 </div>
               </div>
               <div className="col-md-5">
                 <h3>Dubai, then and now</h3>
                 
               </div>
           </div>

           <div className="row justify-content-between">
               <div className="col-md-5">
                 <p>The story of Dubai’s growth is one of sheer determination and unprecedented global ambition. A centre for fishing, pearling and sea trade since the early 1800s, Dubai was well established as one of the region’s top trading ports by the beginning of the 20th Century. The Deira souk, which stands to this day, was one of the largest in the region at this time. It attracted businessmen and visitors from around the world, creating a sizeable expatriate population, and in that respect, mirroring the Dubai we know today.</p>
               </div>
               <div className="col-md-5">
                 <p>Striking oil in 1966, Dubai was transformed forever. Oil revenues were used to fund massive infrastructure projects such as Jebel Ali Port, which helped establish Dubai as the biggest trading hub in the MENA region, and the expansion of Dubai International Airport, which would eventually become the world’s biggest international aviation hub.</p>
               </div>
           </div>


         </div>
       </section>


       <section className="why-dubai-section-5">
         <div className="container">
           <div className="row">
               <div className="col-md-5 img-grid-text-1">
                 <p>Already recognised as the Middle East’s most dynamic and exciting city, Dubai is set to further enhance its global reputation when it hosts the region’s first-ever World Expo in 2020. More than 25 million people are expected to attend Expo during its six-month duration from October 2020 to April 2021, while global media coverage will expose the city and its incredible attractions to an audience many times larger again. Dubai’s development is set to accelerate further over the next decade, as a series of strategic initiatives designed to establish it as the region’s first global city make their mark.</p>
               </div>
           </div>


         </div>
       </section>

       <section className="why-dubai-section-6">
         <div className="container">
           <div className="row">
               <div className="col-md-10">
               <div className="mb-4">
                 <img src="/images/why-dubai/ticket-1.png" width="46"/>
               </div>
                 <h4>The Opportunity</h4>
                 <p>The First Group provides private investors the opportunity to purchase hotel guestrooms, suites and serviced apartments in upscale properties located in highly popular locations across Dubai. Find out more about the incredible investment opportunities available by experiencing the city on our Dubai Investment Visit and discover how World Expo 2020 will act as a catalyst for Dubai’s next growth phase.</p>
               </div>
           </div>


         </div>
       </section>
        
      </main>

      <Footer></Footer>

      
    </div>
  )
}

export default WhyDubai