import axios from 'axios';
import React from 'react';
import './Home.sass'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HeaderComponent } from '../ShareComponent/Header/HeaderComponent';
export class Home extends React.Component {
    render() {
        return (
            <>
             <div className="border1"></div>
                <div className="content image vmsText"><br /><br /><br /><br />
                    <h1>Welcome to Vendor Management System</h1><br />
                    {/* <div className="border1"></div>
                    <br/> */}
                    <blockquote className="blockquote-reverse">
                        <p className="vmsText text-white-75 font-weight-light mb-5 font-style">With the help of this application,you can add vendor,can view the list of available
                        vendor at the required location also can do edit their details if needs to be as
                    well as can also remove them ,if they are being deactivated or not providing services now.</p>
                    </blockquote>
                    {/* <div className="border1"></div>
                <br/> */}
                    <div>
                        <a className="btn btn-primary btn-xl js-scroll-trigger" href="/about">Find Out More</a>
                    </div>
                    <h1></h1>
                </div>
                
            </>
        )
    }
}