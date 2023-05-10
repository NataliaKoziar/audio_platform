import Navbar from '@/components/Navbar'
import { Button } from '@mui/material'
import React from 'react'

 const Index= () =>{
  return (
    <>
    <Navbar/>
    <div className='center'>
     <h1>Hello word!!!</h1>
     <h3>Lets go to create the project</h3>
    </div>

    <style jsx>
      {`
      .center{
        margin-top: 150px;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
      }
      `}
    </style>
    </>
  )
}

export default Index
