import Image from 'next/image'
import Link from 'next/link'


import styles from '../../styles/sections/HeroCoverImage.module.css'


import { IconContext } from "react-icons"

import { IoShareSocialOutline, IoBookmarkOutline, IoLocationOutline} from 'react-icons/io5'


export default function HeroCoverImage({ 
  itemId, 
  coverImage, 
  slug, 
  title, 
  description, 
  location  
}) {


  const banner = coverImage ? (<Image 
        className={styles['coverImage']}
        src={coverImage} 
        width={1920} 
        objectFit='cover'
        height={1080}
        layout="fill"
    >
      
    </Image>) : "";
  

  return (

    <>
    <section className={styles['heroBanner']}>

      <div className={styles['bgimage']}>
       { banner }
      </div>

      <div className={ `${styles['container']} container` }>
        
        <div className={ styles['cover-text'] }>
          
          <div className={ styles['covertext-left'] }>
            <div className={ styles['covertext-details'] }>
              <h1>{title}</h1>
              <div className={styles['description-text']}>
                <p>{description}</p>
              </div>

              <div className={styles['location-text']}>
                <p><IoLocationOutline color='#fff' />{location}</p>
              </div>
            </div>
          </div>

          <div className={ styles['covertext-right'] }>
            
            <div className={ styles['covertext-buttons'] }>

              <a href="#" className={ `btn btn-blur btn-icon ${styles['cover-action-btn']} ${styles['cover-action-icon-btn']}` }>
                <span className='react-icon'>
                 
                      <IoBookmarkOutline color={ 'white' } />

                </span>
              </a>
              
              

              <a href="#" className={ `btn btn-blur btn-icon ${styles['cover-action-btn']} ${styles['cover-action-icon-btn']}` }>
                <span className='react-icon'>
                  <IoShareSocialOutline  color={ 'white' } />
                </span>
              </a>


              <a href="#" className={ `btn btn-blur ${styles['cover-action-btn']}` }>
                <span>Download Brochure</span>
              </a>

              <a href="#" className={ `btn btn-blur ${styles['cover-action-btn']}` }>
                <span>View Gallery (19)</span>
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
    </>
    
  )
}