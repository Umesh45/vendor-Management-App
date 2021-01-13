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
                    <Link to='/' className="navbar-brand header1" >HOME</Link>&nbsp;&nbsp;
                        <Link to='/vendor' className="navbar-brand header1">VENDOR</Link>&nbsp;&nbsp;
                        <Link to='/#' className="navbar-brand header1">ABOUT</Link>&nbsp;&nbsp;
                        <Link to='/#' className="navbar-brand header1">CONTACT</Link>
                </nav>
                {/* <nav>
                    <input type="checkbox" id="check">
                        <label for='check' className="checkbtn">
                            <i className="fas fa-bars"></i>
                            </label>
                            </input>
                    <label className='logo'>VMS</label>
                    <ul>
                        <li> <a href='/'>HOME</a></li>
                        <li> <Link to='/vendor' >VENDOR</Link></li>
                        <li> <Link to='/#' >ABOUT</Link></li>
                        <li> <Link to='/#' >CONTACT</Link></li>

                     </ul>   
                    </nav>*/}
                <Route path="/vendor" component={VendorComponent} />
                <Route exact path="/" component={Home} />
            </Router>
        )
    }
    
}