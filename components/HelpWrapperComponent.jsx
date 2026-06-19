import Link from 'next/link';

export default function HelpWrapperComponent(){    
    return(
        <>
        <section className="can-help-wrapper">
            <div className="container">
                <div className="can-help wow fadeInUp">
                    <h1 className="section-title">Discover what’s possible with the right technology and talent by your side.
                    <span className="text-yellow">We're here to make it happen.</span></h1>
                    <div className="white-btn"><Link href="/contact-us.html">Let’s Connect</Link></div>
                </div>
            </div>
        </section> 
        </>
    )
}




