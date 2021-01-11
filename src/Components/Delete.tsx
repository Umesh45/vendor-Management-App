import React from 'react';
import axios from 'axios';

export class Delete extends React.Component {
    delData() {
        const data = {
            vendorId: 1005,
            vendorName: 'amit',
            emailId: 'amit@gmail.com',
            address: 'Pune',
            status: 'Active'
        }

        axios.delete('https://localhost:44318/api/vendor/removeVendor')
            .then((data) => {
                console.log(data);
            }).catch((err) => {
                console.log(err);
            })
    }
   
    render() {
        return (
            <>
                <button onClick={this.delData}>Click To delete</button>
                <br /><br /><br />

            </>
            
            )
    }
              
}