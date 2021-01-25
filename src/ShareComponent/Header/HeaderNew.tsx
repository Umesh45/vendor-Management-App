import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { About } from '../../Components/About';
import { Home } from '../../Components/Home';
import Contact from '../../Components/Contact'

import  VendorComponent  from '../../Components/VendorComponent';
import './HeaderNew.css'
import image from './vendorImage.png'
import { ErrorHandler } from '../../Components/ErrorHandler';


export class HeaderNew extends React.Component {
    render() {
        return (
     <Router>
         <header>
            <nav>
                <div className="row">
                    <img src={image} alt="vendorLogo" className="logo" />
                    <ul className="main-nav">
                        <li><a className="link" href="/home">Home</a></li>
                        <li><a className="link" href="/vendor">Vendor</a></li>
                        <li><a className="link" href="/about">About</a></li>
                        <li><a className="link" href="/contact">Contact</a></li>

                    </ul>
                </div>
            </nav>
                <div className='hero-text-box'>
                    <h1>Vendor Management, manage your own..!</h1>
                    <Link to="#" className="btn btn-full">Log In</Link>
                    <Link to="#" className="btn btn-ghost">Register</Link>
                </div>
          </header>

          <ErrorHandler>
                    <Route path="/vendor" component={VendorComponent} />
                </ErrorHandler >
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
        </Router>

        );
}
}