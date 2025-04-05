import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

// register
export const registerApi=async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/register`,reqBody,"")
}

// login
export const loginApi=async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/login`,reqBody,"")
}

// admin login
export const adminLoginApi=async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/admin-login`,reqBody,"")
}

// get all user api
export const getAllUsersApi=async(reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/get-all-users`,"",reqHeader)
}

// get all request api
export const getAllRequestsApi=async(reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/get-all-requests`,"",reqHeader)
}

// get all complaint api
export const getAllComplaintApi=async(reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/get-all-complaints`,"",reqHeader)
}

// approve request api
export const approveApi=async(reqBody,reqHeader)=>{
    return await commonApi('PUT',`${serverUrl}/approve-request`,reqBody,reqHeader)
}


// new request api
export const newRequestApi=async(reqBody,reqHeader)=>{
    return await commonApi('POST',`${serverUrl}/new-request`,reqBody,reqHeader)
}

// status api
export const statusApi=async(reqBody,reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/status`,reqBody,reqHeader)
}

// complaint api
export const complaintApi=async(reqBody,reqHeader)=>{
    return await commonApi('POST',`${serverUrl}/complaint`,reqBody,reqHeader)
}

// edit profile api
export const editProfileApi=async(reqBody,reqHeader)=>{
    return await commonApi('PUT',`${serverUrl}/edit-profile`,reqBody,reqHeader)
}

// delete complaint api
export const deleteComplaintApi=async(reqBody,reqheader)=>{
    return await commonApi('DELETE',`${serverUrl}/delete-complaint`,reqBody,reqheader)
}