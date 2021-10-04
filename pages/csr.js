import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import VideoBanner from '../components/VideoBanner'

import Footer from '../components/Footer'


import React, { Component } from "react";

// import styles from '../styles/.module.css'

import TextSection from '../components/text-section'



import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function CSR() {
  return (
    <div className='aboutbody'>

      <Head>
        <title>Damac - Corporate Social Responsibility</title>
        <meta name="description" content="Corporate Social Responsibility - Damac Properties" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar></Navbar>


      


      <main className="main about-main">
       

       <VideoBanner 
         bannerImage={ `/images/csr-bg.jpg` }
       >
         
       </VideoBanner>


       <TextSection className="text-section-csr-1">
         <h2>Why Corporate Social Responsibility (CSR)?</h2>
         <p>As a Company born in the United Arab Emirates, DAMAC Properties believes in giving back to the country that has played such a seminal role in its success story. DAMAC and its Chairman, Hussain Sajwani, have contributed to many philanthropic activities over the years, supporting initiatives and organisations such as the Arab Hope Makers 2020, Emirates Red Crescent, Dubai Cares and Dar Al Ber Society. Philanthropy is also entrenched in the value system of the Sajwani family. Collectively, DAMAC and Hussain Sajwani are supporting His Highness Sheikh Mohammed bin Rashid Al Maktoum’s vision for a better future, where people are happier and enjoy a better quality of life.</p>
       </TextSection>




       <section className="damac-slider-section">
         <div className="container">
           <div className="row">
             
             <div className="col-md-4">
               <div className="text-box">
                 <h4>Milestones</h4>
                 <p>DAMAC Properties and its Chairman, Hussain Sajwani, have collaborated with a range of initiatives and organisations to alleviate hardship and improve quality of life across the communities in which DAMAC operates. Notable milestones include:</p>
               </div>

               <div className="sliderArrows">
                 <a href="#" className="sliderArrow">
                   <span><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.75 15.875L1.875 9L8.75 2.125" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </span>
                 </a>
                 <a href="#" className="sliderArrow">
                   <span><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.25 2.125L9.125 9L2.25 15.875" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    </span>
                 </a>
               </div>
             </div>

             <div className="col-md-8">
               
               <div className="responsive-slider-container">
                  <Carousel className="milestone-carousel">
                     <div>
                         <div className="milestone-carousel-item">
                           <div className="image-text">
                             <div className="img">
                               <img src='/images/slider1img.png' className='img-responsive'/>
                             </div>
                             <div className='text'>
                               <h3>Zayed Day for Humanitarian action</h3>
                               <p>To mark the occassion of the International Humanitarian Day initiative under the slogan og 'Your families .. our people', there was an assembly held during which, the Director od the Red Crescent, Mr. Khalfan Sarhan Al-Rumaithi, received a cheque from Brigadier General Jamal Salem Al Ameri, Executive Director of the Saed Association, to help families affected by the novel coronavirus,COVID-19.</p>
                             </div>
                           </div>
                         </div>
                     </div>
                     <div>
                         <div className="milestone-carousel-item">
                           <div className="image-text">
                             <div className="img">
                               <img src='/images/slider1img.png' className='img-responsive'/>
                             </div>
                             <div className='text'>
                               <h3>Zayed Day for Humanitarian action</h3>
                               <p>To mark the occassion of the International Humanitarian Day initiative under the slogan og 'Your families .. our people', there was an assembly held during which, the Director od the Red Crescent, Mr. Khalfan Sarhan Al-Rumaithi, received a cheque from Brigadier General Jamal Salem Al Ameri, Executive Director of the Saed Association, to help families affected by the novel coronavirus,COVID-19.</p>
                             </div>
                           </div>
                         </div>
                     </div>
                     <div>
                         <div className="milestone-carousel-item">
                           <div className="image-text">
                             <div className="img">
                               <img src='/images/slider1img.png' className='img-responsive'/>
                             </div>
                             <div className='text'>
                               <h3>Zayed Day for Humanitarian action</h3>
                               <p>To mark the occassion of the International Humanitarian Day initiative under the slogan og 'Your families .. our people', there was an assembly held during which, the Director od the Red Crescent, Mr. Khalfan Sarhan Al-Rumaithi, received a cheque from Brigadier General Jamal Salem Al Ameri, Executive Director of the Saed Association, to help families affected by the novel coronavirus,COVID-19.</p>
                             </div>
                           </div>
                         </div>
                     </div>
                 </Carousel>
               </div>

             </div>

           </div>
         </div>
       </section>


       <TextSection className="text-section-csr-2">
         
         <div className="textsectionpart1 mb-5">
           <h2>Hussain Sajwani – DAMAC Foundation</h2>
           <div className="row align-items-center">
             <div className="col-md-8">
               <p>The Hussain Sajwani – DAMAC Foundation is a joint philanthropic initiative between the DAMAC Group and its Chairman, Hussain Sajwani. The Foundation focuses on learning and skills development opportunities to catalyse gainful social and economic participation. The Foundation’s initiatives empower communities within the Arab world towards a sustainable future.</p>
             </div>
             <div className="col-md-4">
               <div className="text-md-end text-center py-2">
                 <img src='/images/img-text-22csr.png' className='img-responsive'/>
               </div>
             </div>
           </div>
         </div>


         <div className="textsectionpart2 mb-5">
           <h2>Our Mission</h2>
           <div className="row align-items-center">
             <div className="col-md-12">
               <p>The Hussain Sajwani – DAMAC Foundation delivers the learning and skills development instrumental in creating socio-economic participation and improving livelihoods.</p>
             </div>
           
           </div>
         </div>

         <div className="textsectionpart3 mb-5">
           <h2>Our Cause</h2>
           <div className="row align-items-center">
             <div className="col-md-12">
               <p>The Hussain Sajwani – DAMAC Foundation is committed to advancing education and learning as its primary objective. It assesses gaps in learning, and unmet vocational skill needs within communities. Then, it targets these gaps with initiatives that can improve economic circumstances, promote employment and create uplift. 

               <br/><br/>The Foundation is the main sponsor of the Dubai Future Foundation’s ‘One Million Arab Coders’ initiative – an integrated educational programme that aims to empower one million Arabs with the ability to code.
               <br/><br/>The Hussain Sajwani – DAMAC Foundation joins a network of grassroots organisations, NGOs and government bodies collaborating across the Arab world to facilitate computer and internet access for interested students.
               <br/><br/>The One Million Arab Coders initiative has received over a million applications, with 311 top students selected to enrol in a Udacity nanodegree course. 
               <br/><br/>Find out more about the One Million Arab Coders initiative. Or read Mr Hussain Sajwani’s thoughts on the importance of coding for the jobs of the future.</p>
             </div>
           
           </div>
         </div>

         <div className="textctacontainer mt-5">
           <div>
             <Link href="/about">
               <a className="btn btn-primary btn-large">About DAMAC</a>
             </Link>
           </div>
         </div>

       </TextSection>

        
      </main>

      <Footer></Footer>

      
    </div>
  )
}

export default CSR