import React from 'react';
import logo from './logo.svg';
import './App.css';
import { VendorComponent } from './Components/VendorComponent';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { AddVendor } from './Components/AddVendor';
import { Home } from './Components/Home';
import { UpdateVendor } from './Components/UpdateVendor';
import { HeaderComponent } from './ShareComponent/Header/HeaderComponent';
import { FooterComponent } from './ShareComponent/Footer/FooterComponent';

function App() {
    return (<>
        <div className="App">
            <HeaderComponent />
            <FooterComponent/>
          <header>
                <Router>
                    {/*<nav className=" nav navbar navbar-expand-lg navbar-light bg-light navbar-nav ">
                    //    <Link to='/' className="navbar-brand">HOME</Link>&nbsp;&nbsp;
                    //    <Link to='/updateVendor' className="navbar-brand">UPDATE VENDOR</Link>&nbsp;&nbsp;
                    //    <Link to='/vendor' className="navbar-brand">AVAILABLE VENDOR</Link>&nbsp;&nbsp;
                    //    <Link to='/addVendor' className="navbar-brand">ADD VENDOR</Link>
                    //</nav>*/}
                    <Route path="/updateVendor" component={UpdateVendor} />
                   
                </Router>
          </header>
        </div>
    </> );
}

export default App;
