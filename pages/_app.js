import '@/styles/bootstrap.min.css';
import '@/styles/font-awesome.min.css';
import '@/styles/slick.css';
import '@/styles/slick-theme.css';
import '@/styles/animate.min.css';
import '@/styles/style.css';
import '@/styles/responsive.css';
import Script from "next/script";
{
  /*
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
  */
}  
import Layout from '../components/Layout'

import { CookiesProvider } from 'react-cookie';
import Head from 'next/head';

export default function App({ Component, pageProps }) {   
  return <>
      <Head>
      <meta name="keywords" content="Business Needs Inc" />
      <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </Head>

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-RW23R8XCC5" />
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RW23R8XCC5');
        `}
      </Script>      

  <Layout>
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  </Layout>
  </>
}


