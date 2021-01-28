import React from 'react';
import contact from '../image/contact.jpg'
import  './contact.css'
//import 'bootstrap/dist/css/bootstrap.min.css'

export default class Contact extends React.Component {
    render() {
        return (<>
            {/* <h1>Contact Us:- </h1>
            <img src={contact} /> */}
 <div className="border1"></div>
        <section className="page-section" id="contact">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="mt-0 font-color">Let's Get In Touch!</h2>
                        <div className='bottom-line'></div>
                        <p className="text-muted mb-5 font-color">Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                        <i className="fas fa-phone fa-3x mb-3 text-muted font-color "></i>
                        <div className="font-color ">+1 (555) 123-4567</div>
                    </div>
                    <div className="col-lg-4 mr-auto text-center">
                        <i className="fas fa-envelope fa-3x mb-3 text-muted font-color"></i>
                        {/* <!-- Make sure to change the email address in BOTH the anchor text and the link target below!--> */}
                        <a className="d-block" href="#">contact@vmsservice.com</a>
                    </div>
                </div>
            </div>
        </section>
        </>
            )
    }
            
  }
