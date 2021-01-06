import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React from "react";
import "./vendor.css";
import { CSSTransition } from 'react-transition-group';




export class Home extends React.Component {
    render() {
        return (
            <>
                <h1>Home</h1>
                <h3> Welcome to Vendor Management System</h3>
                <Router>
                   <h4> <Link to='/vendor'>Show Vendor</Link></h4>
                </Router>
            </>
        )
    }
}




