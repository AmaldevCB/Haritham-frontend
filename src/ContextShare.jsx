import React, { createContext, useState } from 'react'

export const sidebarResponseContext = createContext()
export const payResponseContext=createContext()

function ContextShare({ children }) {
    const [sidebar, setSidebar] = useState("")
    const [pay,setpay]=useState(false)
    return (
        <>
            <sidebarResponseContext.Provider value={{ sidebar, setSidebar }}>
                <payResponseContext.Provider value={{pay,setpay}}>
                    {children}
                    </payResponseContext.Provider> 
            </sidebarResponseContext.Provider>
        </>
    )
}

export default ContextShare