import React, { useState } from 'react'
import TermsConditions from './TermsConditions';
import Modal from 'react-bootstrap/Modal'
import {Link, Redirect ,Route} from 'react-router-dom';
import { useHistory } from 'react-router';
import Button from 'react-bootstrap/Button'
// import Index from '../../static/index.jpg'
// import  {Link} from 'react-router-dom'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Terms & Conditions
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TermsConditions />
      </Modal.Body>
      <Modal.Footer>
        <small>By clicking 'Accept' you are agreeing to our terms and conditions.</small>
        <Button onClick={props.onHide}>Accept</Button>
      </Modal.Footer>
    </Modal>
  );
}



const Home = () => {
  

  
  function handleSubmit(e) {
    e.preventDefault();
    console.log('inhandlesubmit')
    setSubmitted(true);
    console.log(values);
    if((submitted && values.fullname) && (values.email && values.phone)){
      setValid(true);
      console.log(valid)
    }
    
    }
  // const [phone, setPhone] = useState('');
  // const [fullname, setFullname] = useState('')
  // const [email, setEmail] = useState('')
  const [values, setValues] = useState({
    phone: "",
    fullname: "",
    email:"",
  });

  

  function renderRedirect(valid){
    
    if (valid) {
      return(<Link to='/will-creator-tool' />)
    }
  }

  const[submitted, setSubmitted] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [valid,setValid]= useState(false);

  const handleFullname = (event) => {
    setValues({...values, fullname: event.target.value})
    
  }

  const handlePhone = (event) => {
    setValues({...values, phone: event.target.value})
  }

  const handleEmail = (event) => {
    setValues({...values, email: event.target.value})
  }


 

  return (
    <>
      <section id='header' className='d-flex align-items-center' style={{ paddingBottom: '70px', background: `{Index}` }}>
        <div className='container-fluid nav_bg'>
          <div className='row'>

            <div className='col-10 mx-auto'>
              <div className='row'>
                <div className='col-md-8 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column'>
                  <h1 className='brand-name'> <strong >Will Creator</strong> </h1>
                  <h2 className='my-3'>
                    “Secure your dear ones. Express your wishes so that your
                    loved ones stay protected.”
                  </h2>
                </div>

                <div className='col-lg-4 order-2 order-lg-2 d-flex flex-column justify-content-center' style={{ backgroundColor: 'grey', padding: '10px 50px 50px 50px', borderRadius: '13px' }}>
                  <form  onSubmit={handleSubmit}>
                    <div class="mb-3">
                      <label class="form-label">Full Name <span className='required' style={{color:'#db2f23'}}>*</span></label>
                      <input type="Name" class="form-control" value={values.fullname} 
                      onChange={handleFullname} 
                      />
                     {submitted && !values.fullname ?  <span className="text-danger">please enter the fullname</span> : null}
                    </div>
                    <div class="mb-3">
                      <label for="phoneNo" class="form-label">Contact No. <span className='required' style={{color:'#db2f23'}}>*</span></label>
                      <input type="phoneNo " class="form-control required"value={values.phone}  
                      onChange={handlePhone}
                      />
                        {submitted && !values.phone ?  <span className="text-danger">please enter the phone number</span> : null}
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label ">Email address <span className='required' style={{color:'#db2f23'}}>*</span></label>
                      <input class="form-control" value={values.email}  
                       onChange={handleEmail}
                      />
                         {submitted && !values.email ?  <span className="text-danger">please enter the email</span> : null}
                      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div class="mb-3 form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                      <label class="form-check-label" for="exampleCheck1"> I accept all <a className='button' style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }} onClick={() => setModalShow(true)} >Terms and Conditions</a></label>
                      <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
                    </div>
                    <div style={{ display: 'flex' }}>
          
                      <button type="submit" id="next-btn" style={{ justifyContent: 'center' }} onClick={handleSubmit}>
                       Create Will
                       {valid && true ? <Redirect to='/will-creator-tool'></Redirect>:null}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default Home
