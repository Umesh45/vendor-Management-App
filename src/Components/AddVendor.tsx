import axios from 'axios';
import React from 'react';
//import './AddVendor.css'
import VendorService from './VendorService'

export class AddVendor extends React.Component{
    state = {
            vendorId: '',
            vendorName: '',
            emailId: '',
            address: '',
            status: ''
    }
    inputEvent = (event: any) => {
        this.setState({[event.target.name]: event.target.value } )
    }

    onsubmitEvent = (event: any) => {
        event.preventDefault();
        console.log(this.state)
    }

    componentDidUpdate() {
       VendorService.getVendor()
            .then(res => {
                console.log("component did update called")
                console.log(res);
            })
    }

    addVendor = async () => {
        await VendorService.addVendor(this.state)
            .then(response => {
                console.log(response);
                var vendor1 = this.state;
                this.setState({vendor1}) 
            })
            .catch(error => {
                console.error("Not Added..Try Again",error)
            })
    }
    render(){
        return (
            <>
                <h1>Add New Vendor </h1>
                <form onSubmit={this.onsubmitEvent} className='form-group'>
                    
                    <div>
                        <label className='font-weight-bold'> Vendor Id: </label>
                        <input type='text' className='form-control'
                            name='vendorId'
                            placeholder="Enter Vendor's Id"
                            onChange={this.inputEvent}
                            value={this.state.vendorId}
                        />

                    </div>
                    <div>
                        <label className="font-weight-bold"> Vendor Name: </label>
                        <input type='text' className='form-control'
                            name='vendorName'
                            placeholder="Enter Vendor's Name"
                            onChange={this.inputEvent}
                            value={this.state.vendorName}
                        />
                    </div>
                    <div>
                        <label className="font-weight-bold">EmailId:</label>
                        <input type='email' className='form-control'
                            name='emailId'
                            placeholder="Enter Vendor's EmailId"
                            onChange={this.inputEvent}
                            value={this.state.emailId}
                        />
                    </div>
                    <div>
                        <label className="font-weight-bold">Address:</label>
                        <input type='text' className='form-control'
                            name='address'
                            placeholder="Enter Vendor's Address"
                            onChange={this.inputEvent}
                            value={this.state.address}
                        />
                    </div>
                    <div>
                        <label className="font-weight-bold">Status:</label>
                        <input type='text' className='form-control'
                            name='status'
                            placeholder="Enter Vendor's Status"
                            onChange={this.inputEvent}
                            value={this.state.status}
                        />
                    </div><br />
                    
                    <br />
                </form>
                <button onClick={this.addVendor}>Click To Add</button>
                
                <br/><br/><br/>

            </>
        )
    }
   
}