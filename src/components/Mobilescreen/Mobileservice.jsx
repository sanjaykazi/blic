import React from 'react'
import Beneficiary from '../../static/beneficiarysmall.png';
import Email from '../../static/emailsmall.jpg';
import Assets from '../../static/formsmall.png';
const Mobileservice = () => {
  return (
    <div>
      <div className='my-5'>
        <h1 className='text-center'> Create Your Online Will in 3 Easy Steps</h1>
      </div>
      <div className='container-fluid mb-5' style={{ paddingBottom: '50px', borderBottom: '2px solid grey' }}>
        <div className='row'>
          <div className='col-12 mx-auto'>
            <div className='row'>
              <div className='col-md-4 col-4 mx-auto'>
                <div class="card" style={{ height: '250px' }}>
                  <img src={Assets} class="card-img-top" alt="..." style={{ transform: 'scale(0.6)' }} />
                  <div class="card-body">
                    <h3 class="card-title" style={{ fontSize: '17px' }}>Fill-in your Personal & Asset Details</h3>


                  </div>
                </div>
              </div>

              <div className='col-md-4 col-4 mx-auto'>
                <div class="card" style={{ height: '250px' }}>
                  <img src={Beneficiary} class="card-img-top" alt="..." style={{ transform: 'scale(0.7)' }} />
                  <div class="card-body">
                    <h3 class="card-title" style={{ fontSize: '17px' }}>Allocate Your Beneficiary</h3>


                  </div>
                </div>
              </div>

              <div className='col-md-4 col-4 mx-auto'>
                <div class="card" style={{ height: '250px' }}>
                  <img src={Email} class="card-img-top" alt="..." style={{ transform: 'scale(0.6)' }} />
                  <div class="card-body">
                    <h3 class="card-title" style={{ fontSize: '19px' }}>Get Your Will on your Email</h3>


                  </div>
                </div>
              </div>

            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Mobileservice
