import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import AdminLogin from './pages/AdminLogin'
import Dashboard from './pages/Dashboard'
import AdminDash from './pages/AdminDash'
import PageNotFound from './pages/PageNotFound'
import Checkout from './components/Checkout'

function App() {

  return (
    <>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/register' element={<Register/>}/>
     <Route path='/admin' element={<AdminLogin/>}/>
     <Route path='/dashboard' element={<Dashboard/>}/>
     <Route path='/admindash' element={<AdminDash/>}/>
     <Route path='/pagenotfound' element={<PageNotFound/>}/>
     <Route path='/payment' element={<Checkout/>}/>

     </Routes>
    </>
  )
}

export default App
