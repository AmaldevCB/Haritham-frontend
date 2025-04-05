import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/crow.png'

function Home() {
    return (
        <>

            <div className="" style={{ backgroundColor: "#13432e" }}>
                <div className="container">
                    <div className="d-flex justify-content-between mb-0">
                        <div className=""></div>
                        <div className="pt-4" style={{ height: "10vh" }}>
                            <Link to={"/admin"}>
                                <FontAwesomeIcon className="text-light" icon={faUserTie} style={{ fontSize: "1.5rem" }}/>
                            </Link>
                        </div>
                    </div>

                    <div className="text-center d-flex flex-column justify-content-center align-items-center" style={{ height: "90vh" }}>
                        <img className="img-fluid mt-md-5 " style={{ maxHeight: "30vh" }} src={img} alt="home image"/>

                        <div>
                            <h1 className="text-light fw-bold display-1">
                                Haritham
                            </h1>
                            <h2 className="text-light fw-bold display-4">
                                E-Portal
                            </h2>
                            <p className="text-light">Hassle-free waste management at your doorstep</p>

                            <Link to={`/login`}>
                                <button className="btn">
                                    Get Started
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home