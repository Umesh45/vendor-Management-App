import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { AddVendor } from './AddVendor';

export class VendorComponent extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            vendor: [{}]
        }
    }

    componentDidMount() {
        axios.get('https://localhost:44318/api/vendor/getVendor')
        .then(res => {
            console.log(res);
            this.setState({ vendor: res.data })
        })
    }

    render() {
        var vendor = this.state.vendor
        if (vendor.length === 0) {
            return (<h5>No vendor is found</h5>)
        }
        else {
            return (<>
                <h1>Vendor Management System</h1>
                <div>
                    <table className='table table-striped table-responsive-sm'>
                        <thead>
                            <tr>
                                <td><b>VendorId</b></td>
                                <td><b>VendorName</b></td>
                                <td><b>EmailId</b></td>
                                <td><b>Address</b></td>
                                <td><b>Status</b></td>
                            </tr>
                        </thead>
                        <tbody>{vendor.map((v: any,index:any) => {
                            return (
                                <tr key={index}>
                                    <td>{v.vendorId}</td>
                                    <td>{v.vendorName}</td>
                                    <td>{v.emailId}</td>
                                    <td>{v.address}</td>
                                    <td>{v.status}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                    <div>
                        <Router>
                            <Link to='/addVendor'>ADD VENDOR</Link>
                            <Route path='/addVendor' component={AddVendor}/>
                        </Router>
                    </div>
                </div>               
            </>
            );
        }
    }
}