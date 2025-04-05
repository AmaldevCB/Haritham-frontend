import { faArrowCircleLeft, faBroom } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { ToastContainer } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { registerApi } from '../services/allApi'

function Register() {

    const navigate=useNavigate()

    const [userDetails, setUserDetails] = useState({
        username: "",
        phonenumber: "",
        address: "",
        password: ""
    })

    const handlRegister = async () =>{
        const{username,phonenumber,address,password}=userDetails
        if(!username || !phonenumber || !address || !password){
            alert('fill the form completly')
        }else{
            const result = await registerApi(userDetails)
            console.log(result);
            if(result.status==200){
                alert('Register completed')
                setUserDetails({
                    username: "",
                    phonenumber: "",
                    address: "",
                    password: ""            
                })
                navigate('/login')
            }else if(result.status==406){
                alert(result.response.data)
            }
            else{
                alert('something went wrong')
            }
        }
    }

    return (
        <>
            <div className='' style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className='container w-75 '>
                    <h4> <Link to={'/'} className='text-dark' style={{ textDecoration: 'none' }}> <FontAwesomeIcon icon={faArrowCircleLeft} className='me-2' />Back Home</Link></h4>
                    <div className="bg-warning p-3 ">
                        <h4 className='text-center text-dark my-3' style={{ fontSize: "3rem" }}>Haritham</h4>
                        <div className="row">
                            <div className="col-md-6 d-flex justify-content-center align-items-center px-5 py-3 text-light">
                                <form className='w-100'>

                                    <h5 className='text-light mb-3'>Sign Up Your Account</h5>
                                    <div className="mb-3">
                                        <input onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} value={userDetails.username} type="text" placeholder='User name' className='form-control rounded-5' />
                                    </div>
                                    <div className="mb-3">
                                        <input onChange={(e) => setUserDetails({ ...userDetails, phonenumber: e.target.value })} value={userDetails.phonenumber} type="text" placeholder='Phone number' className='form-control rounded-5' />
                                    </div>
                                    <div onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} value={userDetails.password} className="mb-3">
                                        <input type="password" placeholder='Password' className='form-control rounded-5' />
                                    </div>
                                    <div onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })} value={userDetails.address} className="mb-3">
                                        <textarea placeholder='Address' className='form-control rounded-5' />
                                    </div>
                                    <div className="mb-3">
                                        <div>
                                            <button onClick={handlRegister}  type='button' className='btn btn-success w-100 rounded-5'>Register</button>
                                            <p className='mt-3 text-light' style={{ fontWeight: "600" }}>Existing User ? Click Here to <Link to={'/login'} className='text-success'>Login</Link></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6 d-flex justify-content-center align-items-center p-3">
                                <div>

                                    <img src="https://png.pngtree.com/png-vector/20220526/ourmid/pngtree-online-registration-or-sign-up-login-for-account-on-smartphone-app-png-image_4740861.png" alt="" style={{ width: '90%' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer position='top-center' theme='colored' autoClose={1000} />
            </div>
        </>
    )
}

export default Register