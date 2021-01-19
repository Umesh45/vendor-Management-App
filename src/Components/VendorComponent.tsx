import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { AddVendor } from './AddVendor';
import './Home.sass';


export class VendorComponent extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            vendor: [{}]
        }
        axios.get('https://localhost:44318/api/vendor/getVendor')
            .then(res => {
                console.log(res);
                this.setState({ vendor: res.data })
            })
       
    }
    
    componentDidMount() {
        //axios.get('https://localhost:44318/api/vendor/getVendor')
        //.then(res => {
        //    console.log(res);
        //    this.setState({ vendor: res.data })
        //})
    }
    deleteVendor = async (id: any, event: any) => {
        console.log(id);
        await axios.delete('https://localhost:44318/api/vendor/RemoveVendor?VendorId=' + id)
            .then(res => {
                console.log(res);
                var vendor1 = this.state.vendor.filter((v: any) => v.vendorId != id);
                this.setState({ vendor: vendor1 })
        })
    }
    render() {
        var vendor = this.state.vendor
        if (vendor.length === 0) {
            return (<h5>No vendor is found</h5>)
        }
        else {
            return (<>
                <div className='img1'>
                <h1>Vendor Management System</h1><br/>
                <div>
                    <table className='table table-striped table-responsive-sm'>
                        <thead>
                            <tr className='uppertype'>
                                <td><b>Id</b></td>
                                <td><b>Name</b></td>
                                <td><b>EmailId</b></td>
                                <td><b>Address</b></td>
                                <td><b>Status</b></td>
                                <td><b>Edit</b></td>
                                <td><b>Delete</b></td>
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
                                    <td><a href='#' className="btn button">Edit</a></td>
                                    <td>
                                        <button onClick={(event: any) => this.deleteVendor(v.vendorId, event)} className="btn button">DELETE</button>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                    <div>
                        <Router>
                            <Link to='/addVendor' className="btn btn-primary">ADD VENDOR</Link>
                            <Route path='/addVendor' component={AddVendor}/>
                        </Router>
                    </div>
                    </div>
                    </div>
            </>
            );
        }
    }
}