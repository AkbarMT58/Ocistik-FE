import React, { useEffect, useMemo } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import swal from 'sweetalert';
import { format } from 'fecha';

function inDays(d1, d2) {
  var t2 = d2.getTime();
  var t1 = d1.getTime();

  return Math.floor((t2-t1)/(24*3600*1000));
}

function ModalCekresi({show, setShow, inputCekresi}) {
  const [cekResiData, setCekResiData] = useState(null)
  const _fetchResi = async () => {
    console.log({inputCekresi})
    try {
      let res = await fetch("http://localhost:8080/oci/logistics/cek-resi", {
        method: "POST",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Header':"Cache-Control, Content-Type,Xid"
        }, 
        body: JSON.stringify({
          "no_resi": inputCekresi.nomor_resi,
          "marking_code": inputCekresi.marking_code,
        }),
      });
      const resJson = await res.json();
      if(resJson.status === 200) {
        setCekResiData(resJson.data)
      } else {
        swal({
          title: "Oops",
          text: "cannot find your data",
          icon: "error",
        })
      }
    } catch (error) {
      console.log({error})
      swal({
        title: "Oops",
        text: "cannot find your data",
        icon: "error",
      })
      
    }
  }

  useEffect(() => {
    if(show){
      _fetchResi()
    }
  }, [show])
  
  const handleClose = () => setShow(false);

  const listStatusFiltered = useMemo(() => cekResiData?.list_status.filter(v => v.proses), [cekResiData])
  const tanggalTerima = useMemo(() => {
    if(cekResiData) {
      return cekResiData.list_status.find(item => item.status === "closed" && item.proses).tanggal
    }
    return ""
  }, [cekResiData])

  if(cekResiData == null) {
    return null
  }
  const eta = inDays(new Date(), new Date(cekResiData.header.eta))

  return (
    <Modal show={show} onHide={handleClose}
        size="xl">
        <Modal.Header closeButton>
        <Modal.Title>{cekResiData.header.id_so}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='p-0'>
          <div className='d-flex border-bottom'>
            <div className='px-3 py-2 border-end' style={{width: "20%"}}>
              <div className='mb-2'>
                <img src="/image/Group.png" alt="" className='me-2'/>
                Shipment Service</div>
              <div className='h6'>OCE</div>
            </div>
            <div className='px-3 py-2 border-end' style={{width: "20%"}}>
              <div className='mb-2'>
                <img src="/image/Vector(1).png" alt="" className='me-2'/>
                From
              </div>
              <div className='h6'>Jakarta</div>
            </div>
            <div className='px-3 py-2 border-end' style={{width: "20%"}}>
              <div className='mb-2'>
                <img src="/image/Vector(2).png" alt="" className='me-2'/>
                To
              </div>
              <div className='h6'>{cekResiData.header.kecamatan}, {cekResiData.header.kota}</div>
            </div>
            <div className='px-3 py-2 border-end' style={{width: "20%"}}>
              <div className='mb-2'>
                <img src="/image/Vector(3).png" alt="" className='me-2'/>
                Estimate Date
              </div>
              <div className='h6'>{eta > 0 ? eta + (eta == 1 ? " Day" : "Days") : "-"}</div>
            </div>
            <div className='px-3 py-2 ' style={{width: "20%"}}>
              <div className='mb-2'>
                <img src="/image/Vector(4).png" alt="" className='me-2'/>Tanggal Terima</div>
              <div className='h6'>{tanggalTerima !== "" ? format(new Date(tanggalTerima),'D MMM YYYY h:m') : "-" }</div>
            </div>
          </div>
          <div className='py-2 px-3 border-bottom'>
            <div className='d-flex align-items-center'><img src="/image/Vector(5).png" alt="" className='me-2' style={{width: "25px"}}/><h5 className='mb-0'>History Status</h5></div>
          </div>
          <div className='d-flex border-bottom' style={{maxHeight: 400}}>
            <div className='timeline-wrapper pe-3'>
              <ul className='timeline'>
                {
                  listStatusFiltered.map((item, i) => {
                    return (
                      <li className={`${i===(listStatusFiltered.length-1) ? "last " : ""} ${item.proses && "active"}`}>
                        <h6 className='mb-0'>{item.description}</h6>
                        <div>{format(new Date(item.tanggal),'D MMM YYYY h:m') }</div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className='d-flex flex-column align-items-center border-start justify-content-center w-25 ps-3'>
              <div>
                <img src="/image/Vector(6).png" alt="" className='me-2' />
                <span>Reciever Name</span>
              </div>
              <h3 className='my-2 text-center'>
                {cekResiData.header.nama}
              </h3>
              <div>(YANG BERSANGKUTAN)</div>
            </div>
          </div>
          <div className='py-2 px-3 border-bottom'>
            <div className='d-flex align-items-center'><img src="/image/Vector(7).png" alt="" className='me-2' style={{width: "30px"}}/><h5 className='mb-0'>Shipping Detail</h5></div>
          </div>
          <div className='px-3'>
            <div className="row align-items-start mb-2">
              <div className="col p-2">
                <div>Shippment Date</div>
                <b>{format(new Date(cekResiData.header.tanggal),'D MMM YYYY h:m') }</b>
              </div>
              <div className="col p-2">
                <div>Volume</div>
                <b>{cekResiData.header.volume || "-"} m3</b>
              </div>
              <div className="col p-2">
                <div>Weight</div>
                <b>{cekResiData.header.berat} kg</b>
              </div>
            </div>
            <div className="row align-items-start">
              <div className="col p-2">
                <div>Good Description</div>
                <b>{}</b>
              </div>
              <div className="col p-2"><div></div></div>
              <div className="col p-2"><div></div></div>
            </div>
          </div>
          <div className=''>
            
            <div className='border-bottom px-3 py-2'><img src="/image/Vector(6).png" alt="" className='me-2' style={{width : "15px"}}/>Shipper Information</div>
            <div className="container px-3">
              <div className="row align-items-start">
                <div className="col p-2">
                  <div>Shipment Name</div>
                  <b>OCE Logistic</b>
                </div>
                <div className="col p-2"><div></div></div>
                <div className="col p-2"><div></div></div>
              </div>
              <div className="row align-items-start">
                <div className="col p-2">
                  <div>Snipper City</div>
                  <b>JAKARTA</b>
                </div>
                <div className="col p-2"><div></div></div>
                <div className="col p-2"><div></div></div>
              </div>
            </div>
          </div>
          <div className=''>
            <div className='border-bottom px-3 py-2'><img src="/image/Vector(6).png" alt="" className='me-2' style={{width : "15px"}}/>Reciever Information</div>
            <div className="container px-3">
              <div className="row align-items-start">
                <div className="col p-2">
                  <div>Reciever Name</div>
                  <b style={{textTransform : "uppercase"}}>{cekResiData.header.nama}</b>
                </div>
                <div className="col p-2"><div></div></div>
                <div className="col p-2"><div></div></div>
              </div>
              <div className="row align-items-start">
                <div className="col p-2">
                  <div>Reciever City</div>
                  <b style={{textTransform : "uppercase"}}>{cekResiData.header.kecamatan}, {cekResiData.header.kota}</b>
                </div>
                <div className="col p-2"><div></div></div>
                <div className="col p-2"><div></div></div>
              </div>
            </div>
          </div>

        </Modal.Body>
        <Modal.Footer>  
        </Modal.Footer>
    </Modal>
  )
}

export default ModalCekresi