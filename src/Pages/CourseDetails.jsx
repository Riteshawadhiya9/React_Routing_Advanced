import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
    const params = useParams() // ye hook hame url ke parameters ko access krne me help krta hai
    console.log(params) // ye pura object dega jisme sare parameters honge
    console.log(params.id) 
  return (
    <div>
      <h1>{params.id} Detail Page</h1>
    </div>
  )
}

export default CourseDetails
