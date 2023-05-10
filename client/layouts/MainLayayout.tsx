import Navbar from '@/components/Navbar'
import { Container } from '@mui/material'
import React from 'react'
interface LayoutProps{
    children:React.ReactNode
}

const MainLayayout = ({children}:LayoutProps) => {
  return (
    <>
    <Navbar/>
    <Container style={{margin:'90px auto'}}>
    {children}
    </Container>
    
    </>
  )
}

export default MainLayayout
