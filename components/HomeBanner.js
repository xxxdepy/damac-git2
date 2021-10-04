
import React, { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/HomeBanner.module.css'


export default function HomeBanner( { bannerImage, children} ) {
  
  const banner = (
    <Image 
    className={styles['bg-image']}
    src={bannerImage} width={567} 
    height={320}
    placeholder="blur"
    layout="fill"
    >
      
    </Image>

    );
  

  return (
    <div className={styles['homepage-hero-section']}>
      
      { banner }
      { children }
      <div className={styles['homepage-hero-content']}>
        <div className="container">
          
          <div className="row">
            <div className={styles["hero-content-text"]}>
              <h2>Amora at High Gardens</h2>
              <p className={styles["subtext"]}>Live your story to the best.</p>

              <div className={styles['hero-cta-btns']}>
                <Link href="#">
                    <a className={`${styles['hero-cta']} ${styles['hero-cta-dark']}`}>Discover more</a>
                </Link>
                <Link href="#">
                    <a className={`${styles['hero-cta']} ${styles['hero-cta-blurr']}`}>Enquire now</a>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}