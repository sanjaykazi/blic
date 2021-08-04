import React from 'react'
import Aest from '../../static/aest.jpg'
import Pointstoremember from './Pointstoremember';
const Info = () => {
    return (
        <>
            <div className='my-5' style={{borderBottom:'2px solid grey'}}>
            <div class="card mb-3" style ={{border:'none'}}>
            <div className="embed-responsive embed-responsive-16by9" style={{ display:'flex',justifyContent: 'center'}}>
                    <iframe width='550px' height='300px' title="Embeds Page" className="embed-responsive-item" src="https://youtu.be/uoTAVsSeMnY"
                        allowfullscreen style={{ marginTop: '15px', borderRadius: '13px' }}></iframe>


                </div>
  <div class="card-body">
    <h1 class= 'card-title' style={{ marginTop: '5px', textAlign: 'center', color:'#0072bc'}}> Why Make a Will?</h1>
    <p class="card-text"  style={{ marginTop: '5px', textAlign: 'center',justifyContent:'center',color:'grey'}}>A person should make a WILL, as it not only helps to
                        distribute his property according to his wishes but also
                        ensures the interest of the people you care about is
                        taken care of after your death.</p>
                        <p class="card-text"  style={{ marginTop: '5px', textAlign: 'center',justifyContent:'center',color:'grey'}}>            PANDEMIC has shown that life is uncertain, therefore
                        it is necessary to define who should inherit your hardened
                        belongings and assets after you pass away.</p>
    
  </div>
</div>
            </div>
           
        </>
    )
}

export default Info
{/* <div className='container-fluid mb-5' style={{ paddingBottom: '50px', borderBottom: '2px solid grey' }}>
<div className='row'>
    <div className='col-8 mx-auto'>
        <div className='row'>
            <div className='col-md-7 col-10 mx-auto'>
                <h1 style={{ marginTop: '5px', textAlign: 'left' }}> Why Make a Will?</h1>
                <div className='content-auto' style={{ marginTop: '50px', borderRight: '2px solid grey', textAlign: 'left' }} >
                    <p style={{ width: '75%', fontSize: '1.2rem' }}>A person should make a WILL, as it not only helps to
                        distribute his property according to his wishes but also
                        ensures the interest of the people you care about is
                        taken care of after your death.</p>
                    <p style={{ width: '75%', fontSize: '1.2rem' }}>
                        PANDEMIC has shown that life is uncertain, therefore
                        it is necessary to define who should inherit your hardened
                        belongings and assets after you pass away.</p>
                </div>
            </div>



            <div className='col-md-5 col-10 mx-auto' >

                <div className="embed-responsive embed-responsive-16by9" style={{ justifySelf: 'center' }}>
                    <iframe width='550px' height='300px' title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/v64KOxKVLVg"
                        allowfullscreen style={{ marginTop: '55px', borderRadius: '13px' }}></iframe>


                </div>
            </div>
        </div>

    </div>


</div>
</div> */}
