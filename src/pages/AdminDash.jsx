import { faBars, faPowerOff, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { Offcanvas } from 'react-bootstrap'
import AdRequest from '../components/AdRequest'
import AdUserPage from '../components/AdUserPage'
import AdComplaint from '../components/AdComplaint'
import { useNavigate } from 'react-router-dom'

function AdminDash() {

    const navigate = useNavigate()

    const [code, setCode] = useState("request")
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleBar = (code) => {
        setCode(code)
    }

    const handleLogout = () => {
        alert('Logut successful')
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("existingUser")
        navigate('/')
    }


    return (
        <>
            <div className="bg-black">
                <div className="container d-flex justify-content-between py-4">
                    <h1 className='text-light fw-bold ' ><FontAwesomeIcon className='text-success' icon={faUserTie} /> Administrator</h1>
                    <button className='btn px-md-4 px-2 border-light border-2' onClick={handleShow}><FontAwesomeIcon style={{ fontSize: "1.6rem" }} icon={faBars} /></button>
                </div>
            </div>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header className='bg-dark' closeButton>
                    <Offcanvas.Title className='fs-1 text-success'>Dashboard</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='bg-black '>
                    <h1 id='Asidebarh' onClick={(code) => handleBar(code = "request")} className="fs-4  fw-light p-2 my-3 rounded">Requests</h1>
                    <h1 id='Asidebarh' onClick={(code) => handleBar(code = "user")} className="fs-4  fw-light p-2 mb-3 rounded">Users</h1>
                    <h1 id='Asidebarh' onClick={(code) => handleBar(code = "complaint")} className="fs-4  fw-light p-2 mb-3 rounded"> Complaints</h1>
                    <h1 id='Asidebarh' onClick={handleLogout} className="fs-4  fw-light p-2 mb-3 rounded"><FontAwesomeIcon icon={faPowerOff} /> Logout</h1>
                </Offcanvas.Body>
            </Offcanvas>
            <div className="container mt-3">
                <h2>Welcome <span className='text-danger '>Administrator</span></h2>
                {code == "request" && <AdRequest />}
                {code == "user" && <AdUserPage />}
                {code == "complaint" && <AdComplaint />}
            </div>

        </>
    )
}

export default AdminDash