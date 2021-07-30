import React, { useState } from 'react'
import TermsConditions from './TermsConditions';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Index from '../../static/index.jpg'
import {Link} from 'react-router-dom';
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
  const [phone, setPhone] = useState('');
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [modalShow, setModalShow] = useState(false);
  function handleSubmit(e) {
    if (typeof(phone) === 'undefined' || typeof(fullname) === 'undefined' || typeof(email) === 'undefined' ){
        alert('Please Fill the form')
    }
    else{e.preventDefault()}
  
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
                  <form>
                    <div class="mb-3">
                      <label class="form-label">Full Name </label>
                      <input type="Name" class="form-control" value={fullname} onChange={(e) => { setFullname(e.target.value) }} />
                    </div>
                    <div class="mb-3">
                      <label for="phoneNo" class="form-label">Contact No.</label>
                      <input type="phoneNo " class="form-control required"  required='true' value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label ">Email address</label>
                      <input class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
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
                    <div style={{ display: 'flex',justifyContent: 'center' }}>
                      <Link to='/will-creator-tool'>
                      <button type="submit" id="next-btn" style={{ justifyContent: 'center' }} onSubmit={(e) => handleSubmit(e)}>Create Will</button></Link>
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
