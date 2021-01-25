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


