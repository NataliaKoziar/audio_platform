import Navbar from '@/components/Navbar'
import Player from '@/components/Player'
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
    <Player/>
    </>
  )
}

export default MainLayayout
