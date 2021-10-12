
import React, { Component, useState, useEffect } from "react";


import Link from 'next/link'


// import styles from '../styles/.module.css'





export default function PageTitle( { title } ) {


  return (

    <div className="page-title">
      <div className="container">
        <h2>{ title }</h2>
      </div>
    </div>
    
  )
}