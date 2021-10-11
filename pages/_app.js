// pages/_app.js
import Head from 'next/head'

import '../styles/extras/grid-layout.css'
import '../styles/extras/global-components.css'
import '../styles/globals.css'
import '../styles/extras/styled-sections.css'
import '../styles/pagestyles.css'
import '../styles/Navbar.styles.css'


import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false



// React Responsive
import { Context as ResponsiveContext } from 'react-responsive'
import { useMediaQuery } from 'react-responsive'
import { BrowserView, MobileView, isBrowser, isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';



function MyApp({ Component, pageProps }) { 

  <Head>
    <meta name="viewport" content="viewport-fit=cover" />
  </Head>

  return <Component {...pageProps} />
}

export default MyApp


