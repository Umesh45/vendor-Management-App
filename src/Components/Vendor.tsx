import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './vendor.css';

export class Vendor extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            vendor: [{}]
        }

    }
  

    componentDidMount() {
       axios.get('https://localhost:44318/api/vendor/getVendor').then(res => {
            console.log(res);
            this.setState({ vendor: res.data })
        })
    }

    render(){
        return (<>
            <div className='vendorstyle'>

            <h1>Vendor Management System</h1>
            <Router>
                <h1> <Link to='/'>Home</Link>&nbsp;&nbsp;</h1>
            </Router>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <td><b>VendorId</b></td>
                        <td><b>VendorName</b></td>
                        <td><b>EmailId</b></td>
                        <td><b>Address</b></td>
                        <td><b>Status</b></td>
                    </tr>
                </thead>
                <tbody>{this.state.vendor.map((v: any) => {
                    return (
                        <tr key={v.vendorId}>
                            <td>{v.vendorId}</td>
                            <td>{v.vendorName}</td>
                            <td>{v.emailId}</td>
                            <td>{v.address}</td>
                            <td>{v.status}</td>
                            <button>Edit</button>
                        </tr>
                    )
                })}
                </tbody>
                </table>
                </div>
            </>

        );
    }
}