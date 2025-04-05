import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { complaintApi } from '../services/allApi';

function Complaint() {
    const [show, setShow] = useState(false);
    const [complaint,setComplaint]=useState("")
    console.log(complaint);
    

    const handleClose = () => {
        handleClear()
        setShow(false);}
    const handleShow = () => setShow(true);

    const handleClear = () =>{
        setComplaint("")
    }

    const handleComplaint = async()=>{
        const user=(JSON.parse(sessionStorage.getItem("existingUser")))

        const reqBody = {
            username:user.username,
            phonenumber:user.phonenumber,
            complaint: complaint
        }
        const reqHeader={
            "Content-Type":"application/json",
            "Authorization":`Bearer ${sessionStorage.getItem("token")}`
        }
            const result = await complaintApi(reqBody,reqHeader)
            console.log(result);
            if (result.status==200) {
                alert("Complaint posted")
                handleClear()
                handleClose()
            }
            else{
                alert('Request Failed')
            }

    }
  
    return (
        <> <div className="text-center mt-5">
            <h1 className='mb-3'>Complaint</h1>
            <h4 id='complaint' onClick={handleShow}>Raise a complaint to admin <FontAwesomeIcon icon={faFlag} /></h4>
            <img src="https://www.callcentrehelper.com/images/stories/2022/11/complaint-2014526636-760.jpg" className='img-fluid w-50 d-md-inline d-none' alt="" />
            <img src="https://www.callcentrehelper.com/images/stories/2022/11/complaint-2014526636-760.jpg" className='img-fluid d-md-none' alt="" />
            <Modal centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Put Your Complaint</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <textarea value={complaint} onChange={(e)=>setComplaint(e.target.value)} className='form-control border-2 border-success' name="" id="" cols="30"></textarea>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClear} >
                        Clear
                    </Button>
                    <Button variant="primary" onClick={handleComplaint}>
                        Send complaint
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
        </>
    )
}

export default Complaint