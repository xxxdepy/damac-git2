
import React, { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/TextSection.module.css'


export default function TextSection( { className, children } ) {
  
  
  

  return (
    <div className={ `${styles['text-section']} ${className}`}>
      <div className="container">
        
        { children }

      </div>
    </div>


    
  )
}