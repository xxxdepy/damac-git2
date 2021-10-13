
import React, { Component, useState, useEffect } from "react";


import Link from 'next/link'
import Image from 'next/image'



// import styles from '../styles/.module.css'





export default function PageTitle( { title, subtitle, backgroundImage, isMobile } ) {

  const bgImage = <div className='pagetitle-bg-cover'>
    <Image
         src={ backgroundImage }
         layout='fill'
      />
  </div>;

  return (

    <>
      <div className="page-title">
        {bgImage}
        <div className="container">
          {subtitle &&
            <p className={'pagetitle-subtitle'}>{subtitle}</p>
          }

          <h2>{ title }</h2>
          
        </div>
      </div>
    </>
    
  )
}