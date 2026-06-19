// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import Head from 'next/head';
// import Link from 'next/link';

// export default function Layout({ children }){
//     return(
//         <>  
//         <Head>  
//         </Head>         

//         <header>
//             <div className="top-head">
//                 <div className="container"> 
//                     <div className="row align-items-center">
//                         <div className="col-12 col-sm-6 col-md-6">
//                             <div className="social-media-icons">
//                                 <ul>
//                                     <li><a href="https://x.com/BusinessNeeds_" target="_blank"><i className="bi bi-twitter-x"></i></a></li>                                   
//                                     <li><a href="https://www.linkedin.com/company/business-needs-inc" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
//                                     <li><a href="https://www.youtube.com/watch?v=sI1dTHf3Nq0" target="_blank"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="col-12 col-sm-6 col-md-6">
//                             <div className="right-area">
//                                 <ul>
//                                     <li><Link href="/contact-us.html">Let's Talk</Link></li>
//                                     {
//                                         /*
//                                         <li><a href="/"><i className="fa fa-search" aria-hidden="true"></i></a></li>
//                                         */
//                                     }
                                    
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="navbar-wrapper" id="sticky-header">
//                 <div className="container">
//                     <Navbar />                    
//                 </div>
//             </div>
//         </header>
        
//         { children }        

//         <Footer />                          
        
//         </>
//     )
// }

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();

  const hideLayoutRoutes = [
     "/leadership-summit-2026/register",
  ];

  const shouldHideHeaderFooter = hideLayoutRoutes.includes(router.pathname);

  return (
    <>
      <Head></Head>

      {!shouldHideHeaderFooter && (
        <header>
          <div className="top-head">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-sm-6 col-md-6">
                  <div className="social-media-icons">
                    <ul>
                      <li>
                        <a
                          href="https://x.com/BusinessNeeds_"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="bi bi-twitter-x"></i>
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://www.linkedin.com/company/business-needs-inc"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i
                            className="fa fa-linkedin-square"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://www.youtube.com/watch?v=sI1dTHf3Nq0"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i
                            className="fa fa-youtube-play"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-6">
                  <div className="right-area">
                    <ul>
                      <li>
                        <Link href="/contact-us.html">Let&apos;s Talk</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="navbar-wrapper" id="sticky-header">
            <div className="container">
              <Navbar />
            </div>
          </div>
        </header>
      )}

      {children}

      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
}