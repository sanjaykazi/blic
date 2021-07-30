import React from 'react'
import Assets from '../../static/forms-icon.png'
import Benificiary from '../../static/beneficiary.png';
import Will from '../../static/email.jpg'
const Service = () => {
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'> Create Your Online Will in 3 Easy Steps</h1>
      </div>
      <div className='container-fluid mb-5' style={{ paddingBottom: '50px', borderBottom: '2px solid grey' }}>
        <div className='row'>
          <div className='col-7 mx-auto'>
            <div className='row'>
              <div className='col-md-4 col-8 mx-auto'>
                <div class="card" style={{ height: '450px' }}>
                  <img src={Assets} class="card-img-top" alt="..." style={{ transform: 'scale(0.5)' }} />
                  <div class="card-body">
                    <h3 class="card-title" style={{ fontSize: '1.2 rem' }}>Fill-in your Personal & Asset Details</h3>


                  </div>
                </div>
              </div>

              <div className='col-md-4 col-8 mx-auto'>
                <div class="card" style={{ height: '450px' }}>
                  <img src={Benificiary} class="card-img-top" alt="..." style={{ transform: 'scale(0.6)' }} />
                  <div class="card-body">
                    <h3 class="card-title">Allocate Your Beneficiary</h3>


                  </div>
                </div>
              </div>

              <div className='col-md-4 col-8 mx-auto'>
                <div class="card" style={{ height: '450px' }}>
                  <img src={Will} class="card-img-top" alt="..." style={{ transform: 'scale(0.5)' }} />
                  <div class="card-body">
                    <h3 class="card-title">Get your Will on Email</h3>


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

export default Service
