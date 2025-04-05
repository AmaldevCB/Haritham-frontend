import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Notification() {
    return (
        <>
            <div className="text-center mt-5">
                <h1 className='mb-3'>Notifications</h1>
                <div className='text-dark'>
                    <p className='mb-3'><FontAwesomeIcon icon={faMessage} /> "Your notification 1"</p>
                    <p className='mb-3'><FontAwesomeIcon icon={faMessage} /> "Your notification 2"</p>
                    <p className='mb-3'><FontAwesomeIcon icon={faMessage} /> "Your notification 3"</p>

                </div>
                <div className="">
                    <h4>You have no Notifications</h4>
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/no-notification-7359561-6024629.png" alt="" className="img-fluid w-25" />
                </div>
            </div>
        </>
    )
}

export default Notification