import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return ( 
    <div className='flex justify-between py-4 px-8 bg-gray-800 items-center'>
      <h2 className='text-2xl font-bold'>React_Routing_Advanced</h2>
      <div className='flex gap-8'>
        <Link className='text-lg font-medium' to='/'>Home</Link>
        <Link className='text-lg font-medium' to='/about'>About</Link>
        <Link  className='text-lg font-medium'to='/courses'>Courses</Link>
        <Link  className='text-lg font-medium'to='/product'>Products</Link>
      </div>
    </div>
  )
}

export default Navbar
