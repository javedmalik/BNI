import React from 'react';
import Head from 'next/head';
import { useState, useEffect} from "react";
import Link from 'next/link';
import { Button, Modal, ModalBody, ModalFooter, FormGroup, Form, Input } from "reactstrap";
import HelpWrapperComponent from '../components/HelpWrapperComponent';

export default function ContactUs(){      
    const [your_name, setName] = useState("");
    const [your_email, setEmail] = useState("");
    const [phone_number, setPhone] = useState("");     
    const [service_name, setService] = useState(""); 
    const [your_message, setMessage] = useState(""); 
    

    const displayStyle1 ={
        border: '0',
        width: '100%'
    } 

    const addTodo = async () => {	
        if (your_name === "" ){
          return alert("Please enter Your Name.");
        }	
        if(your_email === ""){
			return alert("Please enter email address.");
		} 
		if (phone_number === "" ){
			return alert("Please enter Phone Number.");
		} else if(phone_number.length<7 && phone_number.length<12){
			return alert("Please enter at least 7 characters.");
		}
        if(service_name === ""){
			return alert("Please Select Service.");
		} 
        if(your_message === ""){
			return alert("Please Enter Your Message.");
		}		
		//alert(your_name+'--'+your_email+'--'+phone_number+'--'+service_name+'--'+your_message);	
        //https://bni-backend.onrender.com/api/contactus/create	
		const response = await fetch("https://nledkdrtwk.execute-api.ap-south-1.amazonaws.com/default/sendMailLambda", {
		  method: "POST",
		  body: JSON.stringify({
			your_name: your_name,
			your_email: your_email,
			phone_number: phone_number,
			service_name: service_name,			
			your_message: your_message,
			subject: "Contact Form: Service Request"			
		  }),
		  headers: {
			"content-type": "application/json",
		  },
		});
		const data = await response.json();
		//alert(data);    
        //
		//console.log(data);    
		//alert(data.message); 		
		if(!data.success)	{         
          alert(data.message);
		} else {
           alert("Thank You. We will contact you soon!");
		   //alert(data.message);
           setName("");
           setEmail("");
           setPhone("");
           setService("");
           setMessage("");
		}	
	};
    
    return(
        <>
        <Head>
            <title>Business Needs Inc</title>
            <meta name="keywords" content="Business Needs Inc" />
            <meta name="description" content="Business Needs Inc" />
        </Head>        
        
        <div className="main-wrapper">
            <section className="inner-banner-wrapper who-we-are-banner">
                <div className="inner-banner-content wow fadeInUp">
                    <h1>Contact Us</h1>   
                    <div className="breadcrumb-wrapper">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li className="breadcrumb-item active">Contact Us</li>
                        </ol>         
                    </div>
                </div>
                <div className="banner-img"><img src="images/about-banner.png" alt="" /></div> 
            </section>

            <section className="lets-connect-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-5">
                            <div className="lets-connect wow fadeInUp">
                                <h5 className="section-title-v1">LET'S CONNECT</h5>
                                <h1 className="section-title">Get in touch with us.
                                <br/>We're here to
                                <br/>assist you.</h1>
                                <p>If you are looking for a diverse, well rounded team that has the technology expertise contact Business Needs Inc. to request a <b>free consultation</b> of your IT processes.</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-7">
                            <div className="contact-form wow fadeInUp">

                                <Form className="et_pb_contact_form clearfix" id="book_demo_form" method="post" onSubmit={(e)=>{e.preventDefault(); addTodo();}}>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <Input type="text" id="your_name" name="your_name" value={your_name} className="form-control form-control-lg mb-3 mt-3" required="required" placeholder="Your Name" onChange={(e) => setName(e.target.value)}> </Input>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <Input type="email" id="your_email" name="your_email" value={your_email} className="form-control form-control-lg mb-3 mt-3" required="required" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)}></Input>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <Input type="tel" id="phone_number" name="phone_number" value={phone_number} className="form-control form-control-lg mb-3 mt-3" required="required" placeholder="Phone Number (optional)" onChange={(e) => setPhone(e.target.value)}></Input>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <Input type="select" id="service_name" name="service_name" className="form-select form-select-lg mb-3 mt-3" required="required" onChange={(e) => setService(e.target.value)}>
                                                <option value="">--Choose Service--</option>
                                                <option value="Staffing">Staffing</option>
                                                <option value="IT Staffing">IT Staffing</option>
                                                <option value="Healthcare Staffing">Healthcare Staffing</option>
                                                <option value="Engineering Staffing">Engineering Staffing</option>
                                                <option value="Professional Staffing">Professional Staffing</option>
                                                <option value="Creative and Marketing Staffing">Creative and Marketing Staffing</option>
                                                <option value="Web Application Development">Web Application Development</option>
                                                <option value="Mobile Application Development">Mobile Application Development</option>
                                                <option value="Digital Marketing">Digital Marketing</option>
                                                <option value="QA Testing">QA Testing</option>
                                                <option value="RPO">RPO</option>
                                                <option value="Payroll Services">Payroll Services</option>
                                                <option value="Offshore Development Services">Offshore Development Services</option>
                                            </Input> 
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <Input id="your_message" name="your_message" className="form-control form-control-lg mb-3 mt-3" type="textarea" rows="4" required="required" placeholder="Your Message" onChange={(e) => setMessage(e.target.value)}></Input>
                                        </div>
                                    </div>                                    
                                    <Button type="submit" className="btn btn-blue">Leave us a Message <span className="icon"><i className="fa fa-arrow-right" aria-hidden="true"></i></span></Button>
                                </Form> 

                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-info-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-5">
                            <div className="contact-info">
                                <div className="wow fadeInUp">
                                    <h5 className="section-title-v1">CONTACT INFO</h5>
                                    <h1 className="section-title">We’re happy to help - just reach out.</h1>
                                </div>
                                <div className="find-us wow fadeInUp">
                                    <h1 className="section-title">Find Us</h1>
                                    <p>Use the maps to locate our offices. Our team is happy to assist you with directions or scheduling a visit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-7">
                            <div className="contact-address-wrapper">
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="address-box address-usa wow fadeInUp">
                                            <h4><span className="text">USA</span></h4>
                                            <div className="content">
                                                <p><a href="mailto:info@businessneedsinc.com">info@businessneedsinc.com</a></p>
                                                <p><a href="tel:(909) 869-1173">(909) 869-1173</a></p>
                                                <p>We will get back to your query<br/> within 24hrs</p>
                                            </div>
                                            <div className="map">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1654.1392173747442!2d-117.8441714!3d33.9853813!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c32bb3182437b7%3A0x622a53cf8b912e40!2sBusiness%20Needs%20Inc!5e0!3m2!1sen!2sin!4v1749813106709!5m2!1sen!2sin" height="440" style={displayStyle1} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                            </div>

                                            
                                            <div className="bottom-content">
                                                <h5>Headquarter</h5>
                                                <p><span className="text-black">Business Needs Inc</span>
                                                <br/>1950 S Brea Canyon Rd Suite #5, Diamond Bar, CA 91765, USA</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="address-box address-india wow fadeInUp" data-wow-delay="0.2s">
                                            <h4><span className="text">India</span></h4>
                                            <div className="content">
                                                <p><a href="mailto:hr@businessneedsinc.com">hr@businessneedsinc.com</a></p>
                                                <p><a href="tel:(921) 164-9716">(921) 164-9716</a></p>
                                                <p>We will get back to your query<br/> within 24hrs</p>
                                            </div>
                                            <div className="map">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.122262180108!2d77.37518347535816!3d28.626097575668325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce51ef01628c9%3A0xc5d7a3e2a2f78da9!2sBusiness%20Needs%20Inc.!5e0!3m2!1sen!2sin!4v1749730794860!5m2!1sen!2sin" height="440" style={displayStyle1} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                            </div>
                                            <div className="bottom-content">
                                                <h5>Delivery Center</h5>
                                                <p><span className="text-black">Business Needs Inc</span>
                                                <br/>H-146/147, Sector 63 Rd, H Block, Sector 63, Noida, Uttar Pradesh 201301</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <HelpWrapperComponent />
            
        </div>
        </>
    )
}