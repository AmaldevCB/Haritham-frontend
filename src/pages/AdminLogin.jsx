import { faArrowCircleLeft, faBroom } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { ToastContainer } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { adminLoginApi } from '../services/allApi'

function AdminLogin() {
 
    const navigate = useNavigate()

    const [adminPassword,setadminPassword]=useState({
        password:""
    })
    console.log(adminPassword);
    

    const handleALogin = async()=>{
        if(!adminPassword){
            alert('Enter the Administrator Password')
        }
        else{
            const result= await adminLoginApi(adminPassword)
            console.log(result);
            if(result.status==200){
                alert('Administrator logged in')
                sessionStorage.setItem("token",result.data)
                navigate('/admindash')
            }else if(result.status==406){
                alert('Wrong Password')
            }else{
                alert('something went wrong')
            }
        }
    }

    return (
        <>
            <div className='bg-dark' style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <div className='container w-75 '>
                    <h4> <Link to={'/'} className='text-light' style={{ textDecoration: 'none' }}> <FontAwesomeIcon icon={faArrowCircleLeft} className='me-2' />Back Home</Link></h4>
                    <div className="bg-black text-light p-3 ">
                        <div className="">
                            <div className='text-center'>
                                <h4 className='text-center text-light mb-1' style={{ fontSize: "3rem" }}>Haritham</h4>
                                <img className='img-fluid w-25' src="https://i.pinimg.com/originals/3f/34/b2/3f34b2b917029cc9a0caddaa0a4454fb.png" alt="" style={{ width: '75%' }} />
                            </div>
                            <div style={{paddingLeft:"20%",paddingRight:"20%"}} className="d-flex justify-content-center align-items-center text-light mt-3 mb-3">
                                <form className='w-100'>
                                    <h5 className='text-light mb-3 text-center' style={{ fontSize: "1.5rem" }}>Administrator LogIn</h5>
                                    <div className="mb-3">
                                        <input onChange={(e)=>setadminPassword({password:e.target.value})} type="password" placeholder='Password' className='form-control rounded-5' />
                                    </div>
                                    <div className="mb-3">
                                        <div>
                                            <button onClick={handleALogin} type='button' style={{backgroundColor:"red"}}  className='btn w-100 rounded-5'>Login</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer position='top-center' theme='colored' autoClose={1000} />
            </div>
        </>
    )
}

export default AdminLogin