import axios from 'axios';
import React from 'react';
import './Home.sass'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HeaderComponent } from '../ShareComponent/Header/HeaderComponent';
export class Home extends React.Component {
    render() {
        return (
            <>
                <div className="content image"><br /><br /><br /><br />

                    <h1>Welcome to Vendor Management System</h1><br />
                    <blockquote className="blockquote-reverse">
                        <p>With the help of this application,you can add vendor,can view the list of available
                        vendor at the required location also can do edit their details if needs to be as
                    well as can also remove them ,if they are being deactivated or not providing services now.</p>
                    </blockquote>
                    <h1></h1>
                </div>
                
            </>
        )
    }
}