// pages/_app.js
import Head from 'next/head'

import '../styles/bootstrap/bootstrap.css'
import '../styles/Bootstrap.styles.css'
import '../styles/globals.css'
import '../styles/pagestyles.css'


import '../styles/Navbar.styles.css'


import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false



function MyApp({ Component, pageProps }) {
  <Head>
    <meta name="viewport" content="viewport-fit=cover" />
  </Head>
  return <Component {...pageProps} />
}

export default MyApp
