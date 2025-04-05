import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { approveApi, getAllRequestsApi } from '../services/allApi'
import { faCheck, faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function AdRequest() {

    const [sas,setsas]=useState("")
    const [requests, setrequests] = useState([])

    const handleRequest = async () => {
        const reqheader = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        }
        const result = await getAllRequestsApi(reqheader)
        console.log(result);
        setrequests(result.data)
    }
    const handleApprove = async (id) => {
        const reqheader = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        }
        const reqBody ={
            _id:id,
            status:true
        }
        console.log(reqBody);

        const result = await approveApi(reqBody,reqheader)
        console.log(result);
        setsas(result)
        
        
    }
    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            handleRequest()
        }
    }, [sas])

    
    return (
        <>
            <div className='text-center mt-5'>
                <h1>Request from users</h1>
                {requests ?
                    <Table className='rounded' striped bordered hover variant="dark" responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>User Name</th>
                                <th>Phone number</th>
                                <th>Request date</th>
                                <th>Approve</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.map((item, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.username}</td>
                                    <td>{item.phonenumber}</td>
                                    <td>{item.date.split("T")[0]}</td>
                                    <td>{!item.status ? <FontAwesomeIcon onClick={()=>handleApprove(item._id)} className='text-black bg-danger p-1' icon={faCheck} /> : <FontAwesomeIcon className='text-black bg-success p-1' icon={faCheckDouble} />}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    :
                    <h1>No requests from users</h1>
                }
            </div>
        </>
    )
}

export default AdRequest