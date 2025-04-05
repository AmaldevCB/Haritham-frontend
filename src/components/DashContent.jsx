import { faBellConcierge } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import NewRequest from './NewRequest'
import { sidebarResponseContext } from '../ContextShare'
import Status from './Status'
import Notification from './Notification'
import Complaint from './Complaint'
import Profile from './Profile'

function DashContent() {

   const {sidebar}=useContext(sidebarResponseContext)
   const [user,setuser]=useState("")   

   useEffect(()=>{
    setuser(JSON.parse(sessionStorage.getItem("existingUser")))
    console.log(user);
    
   },[])
    return (
        <>
            <div className="container mt-3">
                <h2>Welcome <span className='text-danger '>{user.username}</span></h2>
                {sidebar=="new" &&<NewRequest/>}
                {sidebar=="status" &&<Status/>}
                {/* {sidebar=="notification" &&<Notification/>} */}
                {sidebar=="complaint" &&<Complaint/>}
                {sidebar=="profile" &&<Profile/>}
            </div>
        </>
    )
}

export default DashContent