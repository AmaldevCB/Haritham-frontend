import React, { useEffect, useState } from 'react'
import { deleteComplaintApi, getAllComplaintApi } from '../services/allApi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'

function AdComplaint() {
    const [complaint, setcomplaint] = useState([])
    const [delStatus,setDelStatus]=useState("")

    const handleComplaint = async () => {
        const reqheader = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        }
        const result = await getAllComplaintApi(reqheader)
        console.log(result);
        setcomplaint(result.data)
    }
    const handleDelete = async(id)=>{
        const reqBody={
            _id:id
        }
        console.log(reqBody);
        
        const reqheader = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        }
        const result = await deleteComplaintApi(reqBody,reqheader)
        console.log(result);
        setDelStatus(result)
        
    }
    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            handleComplaint()
        }
    }, [delStatus])

    return (
        <>

            <div className=' mt-5'>
                <h1 className='text-center'>Complaints from users</h1>

                {complaint.length !== 0 ?

                    complaint?.map(item=> (
                        <div className='my-3 p-3 border border-2 rounded-3 bg-primary border-success'>
                            <div className="d-flex justify-content-between">
                                <h5>Username : {item?.username}</h5>
                                <FontAwesomeIcon onClick={()=>{handleDelete(item?._id)}} className='text-danger fs-5' icon={faTrash} />
                                </div>
                            <h5>Ph number : {item?.phonenumber}</h5>
                            <h5>Complaint : {item?.complaint}</h5>
                        </div>
                    ))

                :
                <h2 className='text-center text-success mt-3'>No complaints from users</h2>
                }
            </div>

        </>
    )
}

export default AdComplaint