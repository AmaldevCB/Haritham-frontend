import { faBellConcierge } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { Alert, Button, Modal} from 'react-bootstrap';
import Checkout from './Checkout';
import { newRequestApi } from '../services/allApi';
import { Link } from 'react-router-dom';
import { payResponseContext } from '../ContextShare';
import { ToastContainer, toast } from 'react-toastify/unstyled';

function NewRequest() {

    const [show, setShow] = useState(false);
    const { pay } = useContext(payResponseContext)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [requestDetails, setRequestDetails] = useState({
        content: "",
        date: "",
        message: ""
    })
    console.log(requestDetails);

    const handleRequest = async () => {
        console.log(pay);

        const { content, date, message } = requestDetails
        if (!content || !date ||!pay ) {
            alert('Complete the form and Payment')
        }
        else {
            const formattedDate = new Date(date).toISOString();
            const user = (JSON.parse(sessionStorage.getItem("existingUser")))

            const reqBody = {
                username: user.username,
                phonenumber: user.phonenumber,
                content,
                date: formattedDate,
                message
            }
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${sessionStorage.getItem("token")}`
            }
            console.log(reqBody);

            const result = await newRequestApi(reqBody, reqHeader)
            console.log(result);
            if (result.status == 200) {
                alert("Requested Successfully")
                handleClear()
            }
            else {
                alert('Request Failed')
            }

        }
    }

    const handleClear = () => setRequestDetails({
        content: "",
        date: "",
        message: ""
    })
    return (
        <>
            <div className='text-center mt-5 '>
                <h1 >New Request</h1>
                <div className='row mt-5'>
                    <div className='col-md-6 p-3'>
                        <form action="">
                            <input type="text" value={requestDetails.content} onChange={(e) => setRequestDetails({ ...requestDetails, content: e.target.value })} className='form-control border-2 border-success' placeholder='Enter the contents' />
                            <input type="date" value={requestDetails.date} onChange={(e) => setRequestDetails({ ...requestDetails, date: e.target.value })} className='form-control mt-3 border-2 border-success' placeholder='Enter pickup date' />
                            <input type="text" value={requestDetails.message} onChange={(e) => setRequestDetails({ ...requestDetails, message: e.target.value })} className='form-control mt-3 border-2 border-success ' placeholder='Any message' />
                            <button type='button' onClick={handleShow} className='btn btn-outline-success w-100 mt-3 border-2 border-success'>Payment</button>
                        </form>
                        <Button className='mt-3 me-3' variant="secondary" onClick={handleClear}>
                            Clear
                        </Button>
                        <Button className='mt-3' variant="primary" onClick={handleRequest} >
                            Send Request
                        </Button>
                    </div>

                    <div className='col-md-6 '>
                        <div className='w-25 d-md-inline d-none' ><img src="https://hmhub.in/wp-content/uploads/2020/03/arterndesignreception.jpg" className='img-fluid' alt="" /></div>
                        <div className='d-md-none'><img src="https://hmhub.in/wp-content/uploads/2020/03/arterndesignreception.jpg" className='img-fluid ' alt="" /></div>
                    </div>

                </div>
                <Modal centered
                    show={show}
                    onHide={handleClose}
                    // backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Pay here</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='text-center'>
                        <div className='mb-3'><Checkout /></div>
                    </Modal.Body>

                </Modal>

            </div>

        </>
    )
}

export default NewRequest