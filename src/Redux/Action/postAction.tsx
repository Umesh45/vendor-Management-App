import axios from 'axios';
import VendorService from '../../Components/VendorService'

 export function getVendor() {
    console.log('called');
    return (dispatch:any) => {
        
        VendorService.getVendor()
        // axios.get('https://localhost:44318/api/vendor/getVendor')
        .then(res=>{return dispatch({
            type: 'GET_VENDOR',
            payload:res.data
        })}
    );
}
}

export function getSimpleName(){
    console.log("action is called")
    return (dispatch:any)=>{
        return(dispatch)({
            type:'SIMPLE_NAME_CHANGE',
            payload:"Hey I am from getSimpleName.Do some Modification"
        })
    }
}

export function addVendor(vendor:any){
    console.log("add action")
    return(dispatch:any)=>{
       VendorService.addVendor(vendor).then(res=>{
           console.log("jhgfsdjhfsd"+res.data)
           return (dispatch)({
               type:'ADD_VENDOR',
               payload:res.data
           })
       })
    }
}

export function editVendor(vendorId:number,venddorName:string){
    console.log("edit action is called")
    return (dispatch:any)=>{
        VendorService.editVendor(vendorId,venddorName).then(res=>{
            return dispatch({
                type:'EDIT_VENDOR',
               payload:res.data
            })
        })
    }
}

