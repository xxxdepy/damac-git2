import React, { Component } from "react";
import { useRouter } from 'next/router'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

// Navbar
import Navbar from '../../components/navbar'
import Footer from '../../components/Footer'


// 
import HeroCoverImage from '../../components/sections/HeroCoverImage'
import ItemDetailsSection from '../../components/sections/ItemDetailsSection'


// import styles from '../styles/.module.css'


import styles from '../../styles/pages/ListingPage.module.css'


// FA

function ListingPage() {
  const router = useRouter()


  // Use the postid prop for retrieving info
  const { id } = router.query

  

  return (

    <div className='blogbody'>

      <Head>
        <title>Damac - Listing</title>
        <meta name="description" content="Listing - Damac Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar className="navbar-normal"></Navbar>


     

      <main className="main listing-main">


        <HeroCoverImage
           itemId={ id } 
           coverImage={ '/images/project-bg.jpg' } 
           slug={ 'some-listing-slug' }
           title={ 'Studio Apartment' }
           description={'Menaro Tower at Business bay'}
           location={'Dubailand, Dubai, United Arab Emirates'}
        />


        <ItemDetailsSection imageBanner='/images/3d-tour-listing.jpg' />


      </main>

      <Footer></Footer>

      
    </div>

  );
}

export default ListingPage