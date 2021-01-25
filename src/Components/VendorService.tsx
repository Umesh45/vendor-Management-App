import config from './config.json';
import axios from 'axios';

class VendorService{

    getVendor(){
        return axios.get(config.GET_VENDOR);
    }

    editVendor(vendorid:number, vendorname:string){
        return axios.put(config.UPDATE_VENDOR+vendorid+'&vendName='+vendorname)
    }

    deleteVendor(vendorId:number){
        return axios.delete(config.DELETE_VENDOR+vendorId);
    }

    addVendor(vendor:any){
        return axios.post(config.ADD_VENDOR,vendor);
    }
}

export default new VendorService();