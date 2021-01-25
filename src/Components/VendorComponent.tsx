import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { AddVendor } from './AddVendor';
import './Home.sass';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getVendor,getSimpleName} from '../Redux/Action/postAction'; 
import './vendor.css'
import VendorDemo from './VendorDemo';
import VendorService from './VendorService'

type vendor={
    vendorId:number,
    vendorName:string
}

class VendorComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            // vendor: [{}],
            error:false,
            showEditVendor:false,
            vendorId:'',
            vendorName:''
            
        }
        this.editVendor2=this.editVendor2.bind(this);
        this.editVendor=this.editVendor.bind(this);
    }
    
    componentDidMount(){
      this.props.getSimpleName();
      this.props.getVendor();
    }

    inputEvent = (event: any) => {
        console.log(event.target.value)
        
        this.setState({[event.target.name]: event.target.value })
    }

    onsubmitEvent = (event: any) => {
        event.preventDefault();
        console.log("form is submitted"+this.state.vendorDetails.vendorName)
    }

    deleteVendor = async (id: any, event: any) => {
        console.log(id);
        await VendorService.deleteVendor(id)
            .then(res => {
                console.log(res);
                var vendor1 = this.state.vendor.filter((v: any) => v.vendorId != id);
                this.setState({ vendor: vendor1 })
            })
            .catch(err=>{console.log(err)})
    }

    editVendor=async (event:any)=>{
        let vname=this.state.vendorName;
        let vid=this.state.vendorId;
            VendorService.editVendor(vid,vname)
            .then(res=>{
                console.log(res)
                this.setState({showEditVendor:false})
            })
            .catch(error=>console.log(error))
       // axios.put(`https://localhost:44318/api/vendor/UpdateVendor?vendId=1000&vendName=Global pvt ltd`)
    }

    editVendor2(vendor:any,event:any){
        this.setState({showEditVendor:true,
        vendorId:vendor.vendorId,
        vendorName:vendor.vendorName})
    }
    
    render() {
        console.log("Getting Simple name from: "+this.props.name)
       var vendor1=this.props.vendor;
        console.log("get Employee: "+this.props.vendor.map((x:any)=>{return x.vendorName}))
        if (this.state.error) {
            return (<div style={{margin:'80px' ,color:'red'}} ><h5>Some problems occured during fetching data from server</h5>
                <h6>ErrorCode:</h6></div>)
        }
        else if(this.state.showEditVendor){
            return(
                <>
                <h4>Edit vendor</h4>
                <form className='form-group'>
                <div>
                        <label className='font-weight-bold'> Vendor Id: </label>
                        <input type='text' className='form-control'
                            name='vendorId'
                            placeholder="Vendor's Id"
                            value={this.state.vendorId}
                             readOnly />
                </div>
                <div>
                        <label className="font-weight-bold"> Vendor Name: </label>
                        <input type='text' className='form-control'
                            name='vendorName'
                            placeholder="Enter Vendor's Name"
                            onChange={this.inputEvent}
                            value={this.state.vendorName}
                        />
                    </div><br/>
                    <div>
                        <button className= 'btn button' onClick={(event:any) => this.editVendor(event)}>Update</button>
                    </div>
                </form>
                </>
            )
        }
       
            return (<>
            {/* <VendorDemo/> */}
                <div className='img1'>
                    <h1 className="vmsText" >Vendor Management System</h1><br />
                    <div className="border1"></div>
                    <div>
                        <table className='table table-striped table-responsive-sm table2'>
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
                            <tbody>{vendor1.map((v: any, index: any) => {
                                return (
                                    <tr key={index} className='innerType'>
                                        <td className='innerType1'>{v.vendorId}</td>
                                        <td>{v.vendorName}</td>
                                        <td>{v.emailId}</td>
                                        <td>{v.address}</td>
                                        <td>{v.status}</td>
                                        <td><a href='#' className="btn btn-full" onClick={(event:any)=>this.editVendor2(v,event)}>Edit</a></td>
                                        <td>
                                            <button onClick={(event: any) => this.deleteVendor(v.vendorId, event)} className="btn btn-ghost">DELETE</button>
                                        </td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                        <div>
                            <Router>
                                <Link to='/addVendor' className="btn btn-primary">ADD VENDOR</Link>
                                <Route path='/addVendor' component={AddVendor} />
                            </Router>
                        </div>
                    </div>
                </div>
            </>
            );
        
    }
}

const mapStateToProps=(state:any)=>({
    vendor: state.vendor,
    name:state.name
});

export default connect(mapStateToProps,{getVendor,getSimpleName})(VendorComponent);