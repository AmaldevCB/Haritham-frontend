import React, { useContext } from 'react'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell, faEllipsisVertical, faHandPointUp, faListUl, faNoteSticky, faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons';
import { sidebarResponseContext } from '../ContextShare';
import { useNavigate } from 'react-router-dom';


function Header() {

    const navigate=useNavigate()

    const { setSidebar } = useContext(sidebarResponseContext)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleBar = (code) => {
        setSidebar(code)
    }
    const handleLogout = () => {
        alert('Logut successful')
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("existingUser")
        navigate('/')
      }
    return (
        <>
            <div className="bg-success">
                <div className="container d-flex justify-content-between py-4">
                    <h1 className='text-light fw-bold ' >Haritham</h1>
                    <button className='btn px-md-4 px-2 border-light border-2' onClick={handleShow}><FontAwesomeIcon style={{ fontSize: "1.6rem" }} icon={faBars} /></button>
                </div>
            </div>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='fs-1'>Dashboard</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='bg-primary '>
                    <h1 id='sidebarh' onClick={(code) => handleBar(code="new")}  className="fs-4 text-dark fw-light p-2 my-3 rounded"><FontAwesomeIcon icon={faHandPointUp} /> New Request</h1>
                    <h1 id='sidebarh' onClick={(code) => handleBar(code="status")} className="fs-4 text-dark fw-light p-2 mb-3 rounded"><FontAwesomeIcon icon={faListUl} /> Status</h1>
                    {/* <h1 id='sidebarh' onClick={(code) => handleBar(code="notification")} className="fs-4 text-dark fw-light p-2 mb-3 rounded"><FontAwesomeIcon icon={faBell} /> Notifications</h1> */}
                    <h1 id='sidebarh' onClick={(code) => handleBar(code="complaint")} className="fs-4 text-dark fw-light p-2 mb-3 rounded"><FontAwesomeIcon icon={faNoteSticky} /> Complaints</h1>
                    <h1 id='sidebarh' onClick={(code) => handleBar(code="profile")} className="fs-4 text-dark fw-light p-2 mb-3 rounded"><FontAwesomeIcon icon={faUser} /> Profile</h1>
                    <h1 id='sidebarh' onClick={handleLogout} className="fs-4 text-dark fw-light p-2 mb-3 rounded"><FontAwesomeIcon icon={faPowerOff} /> Logout</h1>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Header