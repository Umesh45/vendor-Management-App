import React from 'react';

import './App.css';
import { ErrorHandler } from './Components/ErrorHandler';

import { HeaderComponent } from './ShareComponent/Header/HeaderComponent';


function App() {
    return (<>
        <div className="App bgimage">
           
            {/*<FooterComponent/>*/}
            <ErrorHandler>
                <HeaderComponent />
                </ErrorHandler>
                
          <header>
                
                    {/*<nav className=" nav navbar navbar-expand-lg navbar-light bg-light navbar-nav ">
                    //    <Link to='/' className="navbar-brand">HOME</Link>&nbsp;&nbsp;
                    //    <Link to='/updateVendor' className="navbar-brand">UPDATE VENDOR</Link>&nbsp;&nbsp;
                    //    <Link to='/vendor' className="navbar-brand">AVAILABLE VENDOR</Link>&nbsp;&nbsp;
                    //    <Link to='/addVendor' className="navbar-brand">ADD VENDOR</Link>
                    //</nav>*/}
                    
                

               
          </header>
        </div>
    </> );
}

export default App;
