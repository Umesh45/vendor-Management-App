import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './About.sass'

export class About extends React.Component {
    createError=()=>{
        console.log("Create error is called");
       
    }

    render() {
        return (<>
            <h1>About</h1>
            {/*<p style={{ marginTop: "100px" }}>About Us</p>*/}
            <blockquote className="blockquote-reverse" style={{ marginTop:"200px" }}>
                <p><b>With the help of this application,you can add vendor,can view the list of available
                vendor at the required location also can do edit their details if needs to be as
                    well as can also remove them ,if they are being deactivated or not providing services now.</b></p>
            </blockquote><br/>
          
        </>)
    }
}