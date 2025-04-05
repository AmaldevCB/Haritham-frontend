import { faArrowCircleLeft, faBackward, faBroom, faDumpster, faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { ToastContainer } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { loginApi } from '../services/allApi'

function Login() {

    const navigate = useNavigate()

    const [userDetails, setUserDetails] = useState({
        phonenumber: "",
        password: ""
    })

    const handleLogin = async () => {
      const {phonenumber,password}=userDetails
      if(!phonenumber || !password){
        alert('please enter phonenumber and password')
      }else{
        const result = await loginApi({phonenumber,password})
        console.log(result);
        if(result.status==200){
            alert('logged in successfully')
            sessionStorage.setItem("existingUser",JSON.stringify(result.data.existinguser))
            sessionStorage.setItem("token",result.data.token)
            setUserDetails({
                phonenumber: "",
                password: ""        
            })
            navigate('/dashboard')
        }else if(result.status==406){
            alert(result.response.data)
        }else{
            alert('something went wrong')
        }
      }
    }

    return (
        <>
            <div className='' style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className='container w-75 '> <h4> <Link to={'/'} className='text-dark' style={{ textDecoration: 'none' }}> <FontAwesomeIcon icon={faArrowCircleLeft} className='me-2' />Back Home</Link></h4>
                    <div className="bg-success p-3 ">
                        <div className="row">
                            <div className="col-md-6 d-flex justify-content-center align-items-center p-3">
                                <img src="https://i.pinimg.com/originals/d1/54/66/d154660a6ae3104de2b0a314667a5ab6.png" alt="" style={{ width: '75%' }} />
                            </div>
                            <div className="col-md-6 d-flex justify-content-center align-items-center p-5 text-light">
                                <form className='w-100'>
                                    <h4 className='text-center text-dark mb-4' style={{ fontSize: "3rem" }}>Haritham</h4>
                                    <h5 className='text-light mb-3'>Sign In to Your Account</h5>
                                    <div className="mb-3">
                                        <input onChange={(e) => setUserDetails({ ...userDetails, phonenumber: e.target.value })} value={userDetails.phonenumber} type="text" placeholder='Phone number' className='form-control rounded-5' />
                                    </div>
                                    <div className="mb-3">
                                        <input onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} value={userDetails.password} type="password" placeholder='Password' className='form-control rounded-5' />
                                    </div>
                                    <div className="mb-3">
                                        <div>
                                            <button onClick={handleLogin} type='button' className='btn btn-warning w-100 rounded-5'>Login</button>
                                            <p style={{ fontWeight: "600" }} className='mt-3 text-light'>New User ? Click Here to <Link to={'/register'} className='text-danger'>Register</Link></p>
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

export default Login