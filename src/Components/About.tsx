import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './About.css'
import aboutImage from '../image/AboutImage.jpg';

export class About extends React.Component {
    createError=()=>{
        console.log("Create error is called");
    }

    render() {
        return (<>
        <div>
                {/*<p style={{ marginTop: "100px" }}>About Us</p>*/}
                    <div className="border1"></div>
               {/* <img src={aboutImage} className='img1'/> */}
                <blockquote className="blockquote-reverse" style={{ marginTop:"150px" }}>
                    <h4 className='about'>ABOUT US: </h4>

                    {/* <div className='bottom-line'></div> */}
                    <p className='about'><b>With the help of this application,you can add vendor,can view the list of available
                    vendor at the required location also can do edit their details if needs to be as
                        well as can also remove them ,if they are being deactivated or not providing services now.</b></p>
                </blockquote>

            </div>
        </>)
    }
}