import React from 'react'
import Customersupport from '../../static/customersupport1.jpg'
import {MdEmail} from 'react-icons/md';
import {FiPhoneCall} from 'react-icons/fi';

const Mobilecontact = () => {
    return (
        <div>
            <div className = 'row' style={{height:'30%'}}>
                <div className = 'col-12'>
                    <img src={Customersupport} alt = '' style = {{justifyContent:'center',objectFit:'contain'}}></img>
                </div>

            </div>
            <div className = 'row' style={{height:'40%'}}>
                <div className = 'col-12'>
                <h4 style = {{marginTop:'40px',width:'100%', textAlign:'center' ,borderBottom:'2px solid grey'}}> For any assistance, you can connect with the Customer Support at :</h4>
                    <div className = 'content' style = {{marginTop:'55px' , textAlign:'left', justifyContent:'center',borderBottom:'2px solid grey'}}>
                         
                    <p style = {{fontSize:'25px',textAlign:'center'}}><MdEmail size = {30}/> experts@lawtarazoo.com</p>
                    <p style = {{fontSize:'25px',textAlign:'center', marginRight:'40px', marginTop:'30px' }}><FiPhoneCall size = {25}/> +91-9619792288</p>
 </div>
                </div>

            </div>
        </div>
    )
}

export default Mobilecontact
