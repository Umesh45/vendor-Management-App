import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { About } from '../../Components/About';
import { Home } from '../../Components/Home';
import Contact from '../../Components/Contact'


import { VendorComponent } from '../../Components/VendorComponent';
import './Header.css'
import image from './vendorImage.png'
import { ErrorHandler } from '../../Components/ErrorHandler';


export class HeaderComponent extends React.Component {
    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="/"><img src={image} /></a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="/">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/vendor">VENDOR</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <ErrorHandler>
                    <Route path="/vendor" component={VendorComponent} />
                </ErrorHandler >
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/conatct" component={Contact} />
            </Router>
        );
}
}