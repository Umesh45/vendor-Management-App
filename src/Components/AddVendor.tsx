import axios from 'axios';
import React from 'react';
import './AddVendor.css'
import VendorService from './VendorService'
import {connect} from 'react-redux';
import {addVendor} from '../Redux/Action/postAction'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

class AddVendor extends React.Component<any,any>{
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

    addVendor = () => {
        console.log("addvendor is fired")
        console.log(this.state)
        var vendor2=this.state
        this.props.addVendor(vendor2);
         VendorService.addVendor(this.state);
         
        // axios.post('https://localhost:44318/api/vendor/AddVendor',this.state)
        //     .then(response => {
        //         console.log("addVendor "+ response);
        //         var vendor1 = this.state;
        //         this.setState({vendor1}) 
        //     })
        //     .catch(error => {
        //         console.error("Not Added..Try Again",error)
        //     })
    }
    render(){
        console.log("addddddd+ "+this.props.vendor )
        return (
            <>
 <              div className="border1"></div>
                <h1 className='vmsText'>Add New Vendor </h1><br></br>
                <form onSubmit={this.onsubmitEvent} className='form-group'>
                    
                    <div>
                        <label className='font-weight-bold vmsText'> Vendor Id;
                         <input type='text' className='form-control'
                            name='vendorId'
                            placeholder="Enter Vendor's Id"
                            onChange={this.inputEvent}
                            value={this.state.vendorId}
                        />
                        </label>
                    </div>
                    <div>
                        <label className="font-weight-bold vmsText"> Vendor Name: 
                        <input type='text' className='form-control'
                            name='vendorName'
                            placeholder="Enter Vendor's Name"
                            onChange={this.inputEvent}
                            value={this.state.vendorName}
                        />
                        </label>
                    </div>
                    <div>
                        <label className="font-weight-bold vmsText">EmailId:
                        <input type='email' className='form-control'
                            name='emailId'
                            placeholder="Enter Vendor's EmailId"
                            onChange={this.inputEvent}
                            value={this.state.emailId}
                        />
                        </label>
                    </div>
                    <div>
                        <label className="font-weight-bold vmsText">Address:
                        <input type='text' className='form-control'
                            name='address'
                            placeholder="Enter Vendor's Address"
                            onChange={this.inputEvent}
                            value={this.state.address}
                        />
                        </label>
                    </div>
                    <div>
                        <label className="font-weight-bold vmsText">Status:
                        <input type='text' className='form-control'
                            name='status'
                            placeholder="Enter Vendor's Status"
                            onChange={this.inputEvent}
                            value={this.state.status}
                        />
                        </label>
                    </div>
                    
                    <br />
                </form>
                <button onClick={this.addVendor} className="btn btn-primary btn-xl js-scroll-trigger">Click To Add</button>
                
                <br/><br/><br/>

            </>
        )
    }
   
}

const mapStateToProps=(state:any)=>({
    vendor:state.vendor
})

export default connect(mapStateToProps,{addVendor})(AddVendor);