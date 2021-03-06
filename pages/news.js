import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'


import Footer from '../components/Footer'


import React, { Component } from "react";

// import styles from '../styles/.module.css'

import TextSection from '../components/text-section'




function News() {
  return (
    <div className='whydubaibody'>

      <Head>
        <title>Damac - News</title>
        <meta name="description" content="News - Damac Properties" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar className="navbar-dark" navbarStyle="dark"></Navbar>


      


      <main className="main news-main">
       

       <section className="damac-new-sec">
           <div className="container">
             <div className="row">
               <div className="col-md-8">
               <div className="primary-cta">
                 <img src="/images/newscover.png" className="img-responsive full-width"/>
                 <label>Press Release</label>
                 <h2>
                 <Link href="#"><a>2020 in Review: DAMAC Apps in Facts and Numbers</a></Link>
                 </h2>
                 <p> 21/12 2020 by The Guardian </p>
               </div>
             </div>
             <div className="col-md-4">
               <div className="damac-latest-news">
                 <div className="sidebar-title">
                   <h3>Latest</h3>
                              
                 </div>
                 <div className="news">
                   <label>Curated</label>
                   <h6><Link href="#"><a>How We Determine Variable Property Rates</a></Link></h6>
                   <p> 21/12 2020 by The Guardian </p>              
                 </div>
                 <div className="news">
                   <label>Trending</label>
                   <h6><Link href="#"><a>How We Determine Variable Property Rates</a></Link></h6>
                   <p> 21/12 2020 by The Guardian </p>              
                 </div>
                 <div className="news">
                   <label>In The News</label>
                   <h6><Link href="#"><a>How We Determine Variable Property Rates</a></Link></h6>
                   <p> 21/12 2020 by The Guardian </p>              
                 </div>
                 <div className="news">
                   <label>Press Release</label>
                   <h6><Link href="#"><a>How We Determine Variable Property Rates</a></Link></h6>
                   <p> 21/12 2020 by The Guardian </p>              
                 </div>
               </div>          
             </div>
             </div>      
             
             
           </div>
           
         </section>



      <section className="news-wrap dark-bg">
          <div className="container">
            <div className="d-flex justify-content-between">
              <div className="dark-title">
                <h2>DAMAC in the News</h2>
              </div>
              <div>
                <a href="#" className="border-btn btn">View all</a>
              </div>
            </div>
           

            <div className="row">
              <div className="col-6 col-md-3">
               <div className="card">
                  <img src="/images/news/1.png" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <span>Customer???s Stories</span>
                    <h5 className="card-title">
                    <Link href="#"><a>Global Investor on How DAMAC Helps to Check Which Property Will Work Best for You</a></Link></h5>
                    <p className="card-text">7-minute read ??? Kim</p>
                    
                  </div>
                </div>
              </div>
               <div className="col-6 col-md-3">
               <div className="card">
                  <img src="/images/news/3.png" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <span>Customer???s Stories</span>
                    <h5 className="card-title">
                    <Link href="#"><a>Global Investor on How DAMAC Helps to Check Which Property Will Work Best for You</a></Link></h5>
                    <p className="card-text">7-minute read ??? Kim</p>
                    
                  </div>
                </div>
              </div>
               <div className="col-6 col-md-3">
               <div className="card">
                  <img src="/images/news/2.png" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <span>Customer???s Stories</span>
                    <h5 className="card-title">
                    <Link href="#"><a>Global Investor on How DAMAC Helps to Check Which Property Will Work Best for You</a></Link></h5>
                    <p className="card-text">7-minute read ??? Kim</p>
                    
                  </div>
                </div>
              </div>
               <div className="col-6 col-md-3">
               <div className="card">
                  <img src="/images/news/2.png" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <span>Customer???s Stories</span>
                    <h5 className="card-title">
                    <Link href="#"><a>Global Investor on How DAMAC Helps to Check Which Property Will Work Best for You</a></Link></h5>
                    <p className="card-text">7-minute read ??? Kim</p>
                   
                  </div>
                </div>
              </div>          
            </div>        
          </div>      
      </section>




      <section className="industry-news bg-light">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="light-title">
              <h2>Industry News</h2>
              <p>Discover how the best of the best use DAMAC to find a home</p>
            </div>
            <div>
              <Link href="#"><a className="btn btn-primary">View all</a></Link>
            </div>
          </div>       
          
          <div className="row">
             <div className="col-6 col-md-3">
             <div className="card">
                <img src="/images/news/Rectangle 135.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title"><Link href="#"><a>2020 in Review: DAMAC Apps in Facts and Numbers</a></Link></h5>
                  <p className="card-text">7-minute read ??? Kim</p>
                 
                </div>
              </div>
            </div>
             <div className="col-6 col-md-3">
             <div className="card">
                <img src="/images/news/Rectangle 151.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title"><Link href="#"><a>2020 in Review: DAMAC Apps in Facts and Numbers</a></Link></h5>
                  <p className="card-text">7-minute read ??? Kim</p>  
                </div>
              </div>
            </div>
             <div className="col-6 col-md-3">
             <div className="card">
                <img src="/images/news/Rectangle 152.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title"><Link href="#"><a>2020 in Review: DAMAC Apps in Facts and Numbers</a></Link></h5>
                  <p className="card-text">7-minute read ??? Kim</p>
                  
                </div>
              </div>
            </div>
             <div className="col-6 col-md-3">
             <div className="card">
                <img src="/images/news/Rectangle 153.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title"><Link href="#"><a>2020 in Review: DAMAC Apps in Facts and Numbers</a></Link></h5>
                  <p className="card-text">7-minute read ??? Kim</p>
                 
                </div>
              </div>
            </div>
            
          </div>

        </div>
        
      </section>



      <section className="dark-bg press-rel">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="dark-title">
              <h2>Press Releases</h2>            
            </div>
            <div>
              <a href="#" className="border-btn btn">View all</a> 
            </div>
          </div>

          <div className="row">
            <div className="col-md-8">            
              <div className="press-release">
                <img src="/images/news/Rectangle 146.png" className="img-fluid full-width" />
                <span className="tag-label">Tag Label</span>
                <h2>2020 in Review: DAMAC Apps in Facts and Numbers</h2>
                <p>December 30 ??? Lin Manuel</p>
              </div>
            </div>
            <div className="col-md-4">
              
              <div className="damac-latest-news">
                <div className="sidebar-title">
                <h3>Latest</h3>
                          
              </div>
              <div className="news">
                <span className='tag-label'>Tag</span>
                <h6><Link href="#"><a>How We Determine Variable Property Rates</a></Link></h6>
                <p> 21/12 2020 by The Guardian </p>              
              </div>
              <div className="news">
                <span>Tag</span>
                <h6><Link href="#"><a>How We Determine Variable Property Rates</a></Link></h6>
                <p> 21/12 2020 by The Guardian </p>              
              </div>
              <div className="news">
                <span>Tag</span>
                <h6><Link href="#"><a>How We Determine Variable Property Rates</a></Link></h6>
                <p> 21/12 2020 by The Guardian </p>              
              </div>
              <div className="news">
                <span>Tag</span>
                <h6><Link href="#"><a>How We Determine Variable Property Rates</a></Link></h6>
                <p> 21/12 2020 by The Guardian </p>              
              </div>
            </div>       

            </div>
            
          </div> 
          
        </div>

        
      </section>


      <section className="dark-bg new-let">
            <div className="container">
                <div className="news-wrap">
                 <div className="new-title">
                    <h3>Don???t miss the latest news on DAMAC. Subscribe to our newsletter!</h3>        
                  </div>
                  <div className="news-form">
                    <form>
                      <div className="mb-3">                 
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email"/>                  
                      </div>
                      <a className="btn btn-primary">Submit</a>
                    </form>
                  </div>
              </div>
            </div>
          
           
        
      </section>


        
      </main>

      <Footer></Footer>

      
    </div>
  )
}

export default News