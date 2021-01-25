import React from 'react';
import {Provider} from 'react-redux';
import './App.css';
import { ErrorHandler } from './Components/ErrorHandler';
import VendorComponent from './Components/VendorComponent';
import { HeaderComponent } from './ShareComponent/Header/HeaderComponent';
import { HeaderNew } from './ShareComponent/Header/HeaderNew';
import store from './Redux/store'

function App() {
    return (
    <>
    <Provider store={store}>
        <div className="App bgimage">
            {/*<FooterComponent/>*/}
                {/* <HeaderNew/> */}

             <ErrorHandler>
                <HeaderComponent />
            </ErrorHandler> 
        </div>
     </Provider>
    </> 
    );
}
export default App;
