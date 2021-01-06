import axios from 'axios';
import React from 'react';
//import './AddVendor.css'

export class AddVendor extends React.Component{
    state = {
        vendor: {
            vendorId: '',
            vendorName: '',
            emailId: '',
            address: '',
            status: ''
        }
    }
    inputEvent = (event: any) => {
        this.setState({ vendor: { [event.target.name]: event.target.value }} )
    }

    onsubmitEvent = (event: any) => {
        event.preventDefault();
        console.log(this.state.vendor)
    }

    addVendor = async () => {
        //const vendor2 = {
        //    vendorId: 1018,
        //    vendorName: "Azure Web app 2 Service pvt ltd",
        //    emailId: "azvend56@azure.in",
        //    address: "Fifth Phase,Tower II Mumbai 456789",
        //    status: "Active"
        //};
        await axios.post('https://localhost:44318/api/vendor/AddVendor', this.state.vendor)
            .then(response => {
                console.log(response)
                //alert("Vendor Added Successfully")
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
                            value={this.state.vendor.vendorId}
                        />

                    </div>
                    <div>
                        <label className="font-weight-bold"> Vendor Name: </label>
                        <input type='text' className='form-control'
                            name='vendorName'
                            placeholder="Enter Vendor's Name"
                            onChange={this.inputEvent}
                            value={this.state.vendor.vendorName}
                        />
                    </div>
                    <div>
                        <label className="font-weight-bold">EmailId:</label>
                        <input type='email' className='form-control'
                            name='emailId'
                            placeholder="Enter Vendor's EmailId"
                            onChange={this.inputEvent}
                            value={this.state.vendor.emailId}
                        />
                    </div>
                    <div>
                        <label className="font-weight-bold">Address:</label>
                        <input type='text' className='form-control'
                            name='address'
                            placeholder="Enter Vendor's Address"
                            onChange={this.inputEvent}
                            value={this.state.vendor.address}
                        />
                    </div><br/>
                    <button type="submit">Show Vendor's details</button>
                    <br />
                </form>
                <button onClick={this.addVendor}>Click To Add</button>
                <br/><br/><br/>

            </>
        )
    }
   
}