import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home } from '../../Components/Home';
import { VendorComponent } from '../../Components/VendorComponent';
import './Header.css'

export class HeaderComponent extends React.Component {
    render() {
        return (
            <Router>
                <nav className=" nav navbar navbar-expand-lg navbar-light bg-light navbar-nav header ">
                    <Link to='/' className="navbar-brand">HOME</Link>&nbsp;&nbsp;
                        <Link to='/vendor' className="navbar-brand">VENDOR</Link>&nbsp;&nbsp;
                        <Link to='/#' className="navbar-brand">ABOUT</Link>&nbsp;&nbsp;
                        <Link to='/#' className="navbar-brand">CONTACT</Link>
                </nav>
                <Route path="/vendor" component={VendorComponent} />
                <Route exact path="/" component={Home} />
            </Router>
        )
    }
    
}