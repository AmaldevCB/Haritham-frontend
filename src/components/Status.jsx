import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { statusApi } from '../services/allApi'

function Status() {

  const [requests, setRequests] = useState("")

  const handleStatus = async () => {
    const user = (JSON.parse(sessionStorage.getItem("existingUser")))

    const reqBody = {
      "phonenumber":"1234567890"
  }
    const reqHeader = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${sessionStorage.getItem("token")}`
    }
console.log(reqBody);

    const result = await statusApi(reqBody, reqHeader)
    console.log(result);
    setRequests(result.data)
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      handleStatus()

    }
  }, [])
  console.log(requests);

  return (
    <>
      <div className="text-center mt-5">
        <h1 className='mb-3'>Request Status</h1>
        {requests.length != 0 ?
          <Table className='rounded' striped bordered hover variant="light">
            <thead>
              <tr>
                <th>#</th>
                <th>Request Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {requests.map(item => (
                <tr>
                  <td>1</td>
                  <td>{item?.date}</td>
                  <td>{item.status? item.status : 'Pending'}</td>
                </tr>
              ))}

            </tbody>
          </Table>
          :
          <h1 className='text-success'>You have no requests</h1>
        }
      </div>
    </>
  )
}

export default Status