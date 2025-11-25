import React from 'react'
import{Link , Outlet} from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex justify-center gap-10 py-4'>
        <Link  className='text-xl font-semibold' to='/product/men'>Men's</Link>
        <Link  className='text-xl font-semibold' to='/product/women'>Women's</Link>
        <Link  className='text-xl font-semibold' to='/product/kids'>Kid's</Link>
      </div>
      {/* <h1>Product Page</h1> */}
      {/* ye is lie comment kia hai kyuki page pr overlay ho jata hai */}
      <Outlet />
       {/* ye <Outlet> jb use krne hota hai jb hme nested routing krni hoti hai jaise app me product me hui hai but wo comments wali me nhi krna hota only jb nested routing krni ho tabhi krna hota hai or pehle import krna hota hai react-router-dom se outlet */}
    </div>
  )
}

export default Product
