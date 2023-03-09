import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalCekresi({show, setShow, inputCekresi}) {

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  return (
    <Modal show={show} onHide={handleClose}
        size="xl">
        <Modal.Header closeButton>
        <Modal.Title>OCE7847584586</Modal.Title>
        </Modal.Header>
        <Modal.Body className='p-0'>
          <div className='d-flex border-bottom'>
            <div className='px-3 py-2 border-end' style={{width: "20%"}}>
              <div>Shipment Service</div>
              <div className='h6'>OCE</div>
            </div>
            <div className='px-3 py-2 border-end' style={{width: "20%"}}>
              <div>From</div>
              <div className='h6'>Jakarta</div>
            </div>
            <div className='px-3 py-2 border-end' style={{width: "20%"}}>
              <div>To</div>
              <div className='h6'>CENGKARENG, JAKARTA</div>
            </div>
            <div className='px-3 py-2 border-end' style={{width: "20%"}}>
              <div>Estimate Date</div>
              <div className='h6'>Days</div>
            </div>
            <div className='px-3 py-2 ' style={{width: "20%"}}>
              <div>Pod Date</div>
              <div className='h6'>19 feb 2023 13:40 </div>
            </div>
          </div>
          <div className='pt-2 px-3 border-bottom'>
            <h5>History Status</h5>
          </div>
          <div className='timeline-wrapper'>
            <ul className='timeline'>
              <li>
                <h6>Status Desc A</h6>
                <div>20-20-2022</div>
              </li>
              <li>
                <h6>Status Desc A</h6>
                <div>20-20-2022</div>
              </li>
              <li>
                <h6>Status Desc A</h6>
                <div>20-20-2022</div>
              </li>
              <li>
                <h6>Status Desc A</h6>
                <div>20-20-2022</div>
              </li>
              <li>
                <h6>Status Desc A</h6>
                <div>20-20-2022</div>
              </li>
            </ul>
          </div>
          <div className='pt-2 px-3 border-bottom'>
            <h5>Shipping Detail</h5>
          </div>
          <div className='px-3'>
            <div class="row align-items-start mb-2">
              <div class="col p-2">
                <div>Shippment Date</div>
                <b>19 feb 2023 13:40</b>
              </div>
              <div class="col p-2">
                <div>Volume</div>
                <b>1 m3</b>
              </div>
              <div class="col p-2">
                <div>Weight</div>
                <b>80,75 kg</b>
              </div>
            </div>
            <div class="row align-items-start">
              <div class="col p-2">
                <div>Good Description</div>
                <b>Sepatu</b>
              </div>
              <div class="col p-2"><div></div></div>
              <div class="col p-2"><div></div></div>
            </div>
          </div>
          <div className=''>
            
            <div className='border-bottom px-3'>Shipper Information</div>
            <div className="container px-3">
              <div class="row align-items-start">
                <div class="col p-2">
                  <div>Shipment Name</div>
                  <b>OCE Logistic</b>
                </div>
                <div class="col p-2"><div></div></div>
                <div class="col p-2"><div></div></div>
              </div>
              <div class="row align-items-start">
                <div class="col p-2">
                  <div>Snipper City</div>
                  <b>JAKARTA</b>
                </div>
                <div class="col p-2"><div></div></div>
                <div class="col p-2"><div></div></div>
              </div>
            </div>
          </div>
          <div className=''>
            <div className='border-bottom px-3'>Reciever Information</div>
            <div className="container px-3">
              <div class="row align-items-start">
                <div class="col p-2">
                  <div>Reciever Name</div>
                  <b>RIDHO</b>
                </div>
                <div class="col p-2"><div></div></div>
                <div class="col p-2"><div></div></div>
              </div>
              <div class="row align-items-start">
                <div class="col p-2">
                  <div>Reciever City</div>
                  <b>CENGKARENG, JAKARTA</b>
                </div>
                <div class="col p-2"><div></div></div>
                <div class="col p-2"><div></div></div>
              </div>
            </div>
          </div>

        </Modal.Body>
        <Modal.Footer>  
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
            Save Changes
        </Button>
        </Modal.Footer>
    </Modal>
  )
}

export default ModalCekresi