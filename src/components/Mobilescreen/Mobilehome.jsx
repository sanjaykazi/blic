import React ,{ useState } from 'react'
import TermsConditions from './TermsConditions';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './mobilehome.css';


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
          <TermsConditions/>
        </Modal.Body>
        <Modal.Footer>
        <small>By clicking 'Accept' you are agreeing to our terms and conditions.</small>
          <Button onClick={props.onHide}>Accept</Button>
        </Modal.Footer>
      </Modal>
    );
  }



const Mobilehome = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>
            <main class="app">

  <header class="header">
    <div class="header__menu">
      <button type="button" title="Back">
        <i aria-label="Back" class="fas fa-angle-left fa-2x"></i>
      </button>
      <button type="button" title="Settings">
        <i aria-label="Settings" class="fas fa-ellipsis-h fa-2x"></i>
      </button>
    </div>
    <h1> <strong className = 'brand-name'>Will Creator</strong> </h1>
    <h2 className = 'my-3'>
                            “Secure your dear ones. Express your wishes so that your loved ones stay protected.”</h2>
                             
                            
  </header>
        
  <section class="todo">
  <div className = 'col-lg-4 order-2 order-lg-2 d-flex flex-column justify-content-center' style= {{backgroundColor:'pink', padding:'10px 50px 50px 50px',borderRadius:'13px'}}>
                    <form>
                    <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Full Name </label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Phone No.</label>
    <input type="password " class="form-control required" id="exampleInputPassword1" />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label ">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1"> I Agree to all <a className= 'button' onClick ={() => setModalShow(true)} >Terms and Conditions</a></label>
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
  </div>
  <div style={{display:'flex'}}>
  <button type="button" class="btn btn-primary btn-lg btn-block" style={{justifyContent:'center'}} >Create Will</button>
  </div>
</form>
                    </div>
  </section>
</main>
        </div>
    )
}

export default Mobilehome
