import { faAddressCard, faCircleUser, faKey, faPenToSquare, faSquarePhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { editProfileApi } from '../services/allApi';

function Profile() {

    const user = (JSON.parse(sessionStorage.getItem("existingUser")))

    const [userDetails, setUserDetails] = useState({
        username: user.username,
        phonenumber: user.phonenumber,
        address: user.address,
        password: user.password,

    })

    const [res,setres]=useState("")
    const [showu, setShowu] = useState(false);
    const handleuClose = () => setShowu(false);
    const handleuShow = () => setShowu(true);

    const handleUpdate = async () => {
        const { username, phonenumber, password, address } = userDetails;
        if (!username || !phonenumber || !password || !address) {
           alert("Fill all the fields")
        }
        else{
            const reqHeader={
                "Content-Type":"application/json",
                "Authorization":`Bearer ${sessionStorage.getItem("token")}`
            }
            
            const result = await editProfileApi(userDetails,reqHeader)
            console.log(result);
            if (result.status == 200) {
                setres(result)
                alert('Profile updated successfully')
                handleuClose()
                sessionStorage.setItem("existingUser", JSON.stringify(result.data))
              } else {
                alert('something went wrong')
              }
      
        }
    }
    useEffect(()=>{
        const user = (JSON.parse(sessionStorage.getItem("existingUser")))

        setUserDetails({
            username: user.username,
            phonenumber: user.phonenumber,
            address: user.address,
            password: user.password,
        })
        console.log(userDetails);
    
    },[res])



    return (
        <>
            <div className="mt-5">
                <h1 className='mb-5 text-center'>User Profile<span onClick={handleuShow} className="text-info ms-3 fs-4"><FontAwesomeIcon icon={faPenToSquare} /></span>
                </h1>
                <div className='d-flex justify-content-center'>
                    <div>
                        <h4 className="text-primary mb-4"><FontAwesomeIcon icon={faCircleUser} />
                        </h4>
                        <h4 className="text-primary mb-4"><FontAwesomeIcon icon={faSquarePhone} />
                        </h4>
                        <h4 className="text-primary mb-4"><FontAwesomeIcon icon={faKey} />
                        </h4>
                        <h4 className="text-primary mb-4"><FontAwesomeIcon icon={faAddressCard} />
                        </h4>
                    </div>
                    <div className='ms-1 me-3'>
                        <h4 className="text-dark mb-4"> {userDetails.username}</h4>
                        <h4 className="text-dark mb-4"> {userDetails.phonenumber}</h4>
                        <h4 className="text-dark mb-4"> {userDetails.password}</h4>
                        <h4 className="text-dark mb-4"> {userDetails.address}</h4>
                    </div>
                </div>
                <Modal centered show={showu} onHide={handleuClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit User Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="mb-3">
                            <input onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} value={userDetails.username} type="text" placeholder='User name' className='form-control border-2 border-success' />
                        </div>
                        <div className="mb-3">
                            <input onChange={(e) => setUserDetails({ ...userDetails, phonenumber: e.target.value })} value={userDetails.phonenumber} type="text" placeholder='Phone number' className='form-control border-2 border-success' />
                        </div>
                        <div onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} className="mb-3">
                            <input value={userDetails.password} type="password" placeholder='Password' className='form-control border-2 border-success' />
                        </div>
                        <div onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })} className="mb-3">
                            <textarea value={userDetails.address} placeholder='Address' className='form-control border-2 border-success' />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleUpdate}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>


            </div>
        </>
    )
}

export default Profile