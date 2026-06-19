import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

export default function Navbar(){    
    const currentRoute = usePathname();
    const router = useRouter();        

    return(
        <>          
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/"><img src="/images/logo.png" alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className={currentRoute === "/"?"nav-item active":"nav-item"} >
                       <Link className="nav-link" href="/">Home</Link>
                    </li>
                    <li className={currentRoute === "/about-us.html"?"nav-item active":"nav-item"}>
                       <Link className="nav-link" href="/about-us.html">About Us</Link>
                    </li>
                    <li className={currentRoute === "/our-services.html"?"nav-item dropdown position-static mega-menu-wrapper active":"nav-item dropdown position-static mega-menu-wrapper"}>
                    <Link className="nav-link dropdown-toggle" href="/our-services.html" role="button" >Our Services</Link>
                    <div className="dropdown-menu mega-menu">
                        <div className="row">
                            <div className="col mega-menu-services mega-talent-solution">
                                <h5><Link className="main-link" href="/talent-solution.html">Talent Solutions</Link></h5>
                                <Link className="link" href="/talent-solution.html#it-staffing">IT Staffing</Link>
                                <Link className="link" href="/talent-solution.html#creative-marketing">Creative and Marketing Staffing</Link>
                                <Link className="link" href="/talent-solution.html#healthcare-staffing">Healthcare Staffing</Link>
                                <Link className="link" href="/talent-solution.html#engineering-staffing">Engineering Staffing</Link>
                                <Link className="link" href="/talent-solution.html#professional-staffing">Professional Staffing</Link>                                
                            </div>
                            <div className="col mega-menu-services mega-it-consulting-services">
                                <h5><Link className="main-link" href="/it-consulting-services.html">IT Consulting Services</Link></h5>
                                <Link className="link" href="/it-consulting-services.html#web-application-development">Web Application Development</Link>
                                <Link className="link" href="/it-consulting-services.html#mobile-applications">Mobile Application Development</Link>
                                <Link className="link" href="/it-consulting-services.html#digital-marketing">Digital Marketing</Link>
                                <Link className="link" href="/it-consulting-services.html#qa-testing">QA Testing</Link>
                            </div>
                            <div className="col mega-menu-services mega-offshore-development-services">
                                <h5><Link className="main-link" href="/offshore-development-services.html">Offshore Development Services</Link></h5>
                                <Link className="link" href="/offshore-development-services.html#offshore-development-center">Offshore Development Center</Link>
                                <Link className="link" href="/offshore-development-services.html#dedicated-team">Dedicated Team</Link>
                                <h5 className="link-wrapper"><Link className="main-nav-link" href="/rpo.html">RPO</Link></h5>
                                <h5 className="link-wrapper"><Link className="main-nav-link" href="/payroll-services.html">Payroll Services</Link></h5>
                            </div>
                        </div>
                    </div>
                    </li>
                    <li className={currentRoute === "/insights.html"?"nav-item active":"nav-item"}>
                        <Link className="nav-link" href="/insights.html">Insights</Link>
                    </li>
                    <li className={currentRoute === "/jobs.html"?"nav-item active":"nav-item"}>
                        <Link className="nav-link" href="/jobs.html">Jobs</Link>
                    </li>
                    <li className={currentRoute === "/contact-us.html"?"nav-item active":"nav-item"}>
                        <Link className="nav-link" href="/contact-us.html">Contact Us</Link>
                    </li>
                </ul>
                </div>
            </nav>        
        </>
    )
}