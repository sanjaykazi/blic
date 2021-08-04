import React from 'react'
import Assets from '../../static/forms-icon.png'
import Benificiary from '../../static/beneficiary.png';
import Will from '../../static/email.jpg'
const Service = () => {
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center' style={{color:'#0072bc'}}> Create Your Online Will in 3 Easy Steps</h1>
      </div>
      <div className='container-fluid mb-5' style={{ paddingBottom: '-10px', borderBottom: '2px solid grey' }}>
        <div className='row' style ={{height:'300px'}}>
          <div className='col-7 mx-auto'>
            <div className='row' >
              <div className='col-md-3 col-4 mx-auto'>
                <div class="card" style ={{height:'200px',display:'flex',justifyContent:'space-around', border:'none'}}>
                  <img src={Assets} class="card-img-top" alt="..." style={{transform: 'scale(0.7)' , justifyContent:'center', marginTop:'15px', height:'150px',width:'150px', paddingTop:'-25px',marginLeft:'50px'}} />
                  <h3  style={{ fontSize: '1 rem',color:'grey',textAlign:'center' }}>Fill-in your Personal & Asset Details</h3>
                  
                </div>
              </div>
              <div className='col-md-1 col-3 mx-auto'></div>
              <div className='col-md-3 col-5 mx-auto'>
                <div class="card" style ={{height:'200px',display:'flex',justifyContent:'space-around', border:'none'}} >
                  <img src={Benificiary} class="card-img-top" alt="..." style={{ transform: 'scale(0.7)' , justifyContent:'center', height:'150px',width:'150px', marginTop:'-15px',marginLeft:'50px'}} />
                  <h3 class="card-title" style={{textAlign:'center' ,color:'grey',textAlign:'center'}}>Allocate Your Beneficiary</h3>

                 
                </div>
              </div>
              <div className='col-md-1 col-4 mx-auto'></div>
              <div className='col-md-3 col-8 mx-auto'>
              <div class="card" style ={{height:'200px',display:'flex',justifyContent:'space-around', border:'none'}} >
                  <img src={Will} class="card-img-top" alt="..." style={{ transform: 'scale(0.7)' , justifyContent:'center', marginTop:'15px', height:'150px',width:'150px',marginLeft:'55px'}} />
                  <h3 class="card-title" style={{marginTop:'0px', paddingTop:'0px', color:'grey', textAlign:'center'}}>Get your Will on Email</h3>
                  <div class="card-body">
                    


                  </div>
                </div>
</div>
             
              <div className='col-md-1 col-4 mx-auto'></div>
              

            </div>

            
          </div>
        </div>
      </div>

    </>
  )
}

export default Service
{/*  */}