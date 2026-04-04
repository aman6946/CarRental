import React from 'react'
import NavbarOwner from '../../components/owner/NavbarOwner'

const Layout = () => {
  return (
    <div className='flex flex-col'>

    <NavbarOwner />  
    <div className='flex'>
        <sidebar />
        <Outlet/>
        
        
        </div>  
      
    </div>
  )
}

export default Layout
