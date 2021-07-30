import React from 'react'
import aest from '../../static/aest.jpg';
import { MdEmail } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi'
import Customersupp from '../../static/customersupport.jpg';

const Contact = () => {
    return (

        <>
            <div className='my-5' style={{ marginTop: '50px', borderBottom: '2px solid grey' }}>


                <div className='container-fluid mb-5'>
                    <div className='row'>
                        <div className='col-12 mx-auto'>
                            <div className='row'>
                                <div className='col-md-4 col-10 mx-auto order-1' style={{ justifyContent: 'left' }}>
                                    <img src={Customersupp} alt='' />


                                </div>
                                <div className='col-md-4 col-10 mx-auto order-2'>
                                    <h4 style={{ marginTop: '20px' }}> For any assistance, you can connect with the Customer Support at :</h4>
                                    <div className='content' style={{ marginTop: '55px', textAlign: 'left' }}>

                                        <p style={{ fontSize: '30px', textAlign: 'left' }}><MdEmail size={50} /> experts@lawtarazoo.com</p>
                                        <p style={{ fontSize: '32px', textAlign: 'left', marginRight: '40px', marginTop: '30px' }}><FiPhoneCall size={40} /> +91-9619792288</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>

    )
}

export default Contact
