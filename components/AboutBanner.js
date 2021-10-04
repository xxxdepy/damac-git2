import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/HomeBanner.module.css'




export default function AboutBanner( { bannerImage, children} ) {


  const banner = (
    <Image 
    className={styles['bg-image']}
    src={bannerImage} width={1920} 
    placeholder="blur"
    height={1080}
    layout="fill"
    >
      
    </Image>

    );
  

  return (
    <div className={styles['homepage-hero-section']}>
      
      { banner }
      { children }
      <div className={styles['homepage-hero-content']}>
        <div className={`container ${styles['about-banner-container']}`}>
          
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className={styles["about-banner-text"]}>
                <div className={ styles['about-banner-top-area'] }>
                  <h2>More than numbers</h2>

                  <div className={ `${styles['bannerPlayBtn']} d-none` }>
                    <span>
                      <svg width="23" height="32" viewBox="0 0 23 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.0517 12.4433L5.94527 1.11301C4.18535 -0.207454 2.8848 0.114694 2.26523 0.426179C1.64672 0.735437 0.609375 1.58177 0.609375 3.77692V28.2235C0.609375 30.423 1.64566 31.2693 2.26359 31.5786C2.53594 31.7142 2.93965 31.852 3.45668 31.852C4.11527 31.852 4.95785 31.6274 5.94527 30.8874L21.0516 19.5572C22.2691 18.6445 22.9679 17.3478 22.9679 16.0002C22.9679 14.6525 22.2691 13.3558 21.0517 12.4433ZM19.7181 17.7797L4.6118 29.1099C3.97113 29.5906 3.47027 29.6938 3.25758 29.5906C3.04547 29.4843 2.83172 29.021 2.83172 28.2234V3.7768C2.83172 2.98251 3.04652 2.51926 3.25922 2.41286C3.30855 2.38895 3.37312 2.37489 3.45187 2.37489C3.7118 2.37489 4.12195 2.52243 4.6118 2.89028L19.7181 14.2206C20.3805 14.7175 20.7456 15.3491 20.7456 16C20.7457 16.6511 20.3805 17.2827 19.7181 17.7797Z" fill="white"/>
                      <path d="M19.7181 17.7797L4.6118 29.1099C3.97113 29.5906 3.47027 29.6938 3.25758 29.5906C3.04547 29.4843 2.83172 29.021 2.83172 28.2234V3.7768C2.83172 2.98251 3.04652 2.51926 3.25922 2.41286C3.30855 2.38895 3.37312 2.37489 3.45187 2.37489C3.7118 2.37489 4.12195 2.52243 4.6118 2.89028L19.7181 14.2206C20.3805 14.7175 20.7456 15.3491 20.7456 16C20.7457 16.6511 20.3805 17.2827 19.7181 17.7797Z" fill="white"/>
                      </svg>
                    </span>
                  </div>
                </div>

                <p>DAMAC adds vibrancy to the cities in which its projects are located, with a huge and diverse portfolio that includes two world-class master-planned golf developments. To date, DAMAC has delivered 30,900+ quality homes, with 34,000 more under way.</p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>


    
  )
}