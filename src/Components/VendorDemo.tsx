import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import  AddVendor  from './AddVendor';
import './Home.sass';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getVendor,getSimpleName} from '../Redux/Action/postAction'; 
import './vendor.css';


class VendorDemo extends React.Component<any,any>{
    componentDidMount(){
        this.props.getSimpleName();
    }
    render(){
        return(
            <>
            <h1>VendorDemo</h1>
            <h2>Name is: {this.props.name}</h2>
            </>
        )
    }
}

const mapStateToProps=(state:any)=>({
    vendor: state.vendor,
    name:state.name
});

export default connect(mapStateToProps,{getVendor,getSimpleName})(VendorDemo);