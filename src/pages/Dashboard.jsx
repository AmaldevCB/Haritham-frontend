import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell, faEllipsisVertical, faHandPointUp, faListUl, faNoteSticky, faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import DashContent from '../components/DashContent';
import { sidebarResponseContext } from '../ContextShare';


function Dashboard() {
  const {setSidebar}=useContext(sidebarResponseContext)

  useEffect(()=>{
    setSidebar("new")
  },[])

  return (
    <>
    <Header/>
    <DashContent/>
    </>
  )
}

export default Dashboard