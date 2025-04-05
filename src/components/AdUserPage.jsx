import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import { getAllUsersApi } from '../services/allApi'

function AdUserPage() {

    const [users, setUsers] = useState([])
    const [show, setShow] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleShow = (user) => {
        setSelectedUser(user);
        setShow(true);
    };
    const handleClose = () => {
        setSelectedUser(null);
        setShow(false);
    };


    const handleUsers = async () => {
        const reqheader = {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        }
        const result = await getAllUsersApi(reqheader)
        console.log(result);
        setUsers(result.data)
    }
    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            handleUsers()
        }
    }, [])

    return (
        <>
            <div className='text-center mt-5'>
                <h1>Users of Haritham</h1>
                {users ?
                    <Table className='rounded' striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>User Name</th>
                                <th>View details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users?.map((item, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.username}</td>
                                    <td><FontAwesomeIcon onClick={()=>handleShow(item)} id='eye' icon={faEye} /></td>
                                </tr>
                            ))}
                        </tbody>
                        <Modal centered show={show} onHide={handleClose}>
                         <Modal.Header closeButton>
                             <Modal.Title>User details</Modal.Title>
                         </Modal.Header>
                         <Modal.Body>
                             {selectedUser ? (
                                 <>
                                     <h5 className='text-success'>User Name: <span className='text-dark'>{selectedUser.username}</span></h5>
                                     <h5 className='text-success'>Pn Number: <span className='text-dark'>{selectedUser.phonenumber}</span></h5>
                                     <h5 className='text-success'>Address: <span className='text-dark'>{selectedUser.address}</span></h5>
                                 </>
                             ) : (
                                 <p>Loading...</p>
                             )}
                         </Modal.Body>
                         <Modal.Footer>
                             <Button variant="secondary" onClick={handleClose}>
                                 Close
                             </Button>
                         </Modal.Footer>
                     </Modal>
                    </Table>
                        
                    :
                    <h1>No users</h1>
                }
            </div>
        </>
    )
}

export default AdUserPage