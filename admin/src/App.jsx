import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify';


export const backendUrl= import.meta.env.VITE_BACKEND_URL; // Importing backend URL from environment variables
export const currency= '$';

const App = () => {
  // const [token,setToken] = useState('');

  // Initializing token state from localStorage.
  // If token is not found, initialize with an empty string.
  const [token,setToken] = useState(localStorage.getItem('token')? localStorage.getItem('token'):'');


  // Every time the token changes, save it to localStorage.
  // This helps persist the token across page reloads.
  useEffect(()=>{
    localStorage.setItem('token',token)
  },[token]);
  return (
    <div className='bg-gray-50 min-h-screen '>
      {/* Toast notifications container */}
      <ToastContainer/>
      {/* If token is not present (user not logged in), show Login component */}
      {token === ""
      ? <Login setToken={setToken}/> // Pass setToken to update token after successful login
      :
         <>
          {/* Main Admin Panel UI starts here after successful login */}
      <Navbar setToken={setToken}/>
      <hr/>
      <div className='flex w-full'>
          <Sidebar/>
          {/* Right content section for pages like Add, List, Orders */}
          <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
            <Routes>
              <Route path='/add' element={<Add token={token}/>}/>
              <Route path='/list' element={<List token={token}/>}/>
              <Route path='/orders' element={<Orders token={token}/>}/>
            </Routes>
          </div>
      </div>
      </>
      }
     
    </div>
  )
}

export default App
