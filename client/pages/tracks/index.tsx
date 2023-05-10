

import TrackList from '@/components/TrackList'
import MainLayayout from '@/layouts/MainLayayout'
import { ITrack } from '@/types/track'
import { Box, Button, Card, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

const Tracks = () => {
const router=useRouter()
const tracks:ITrack[] = [
    {_id:'1', name:'Track1', artist:"Singer1", text:"Some text...", listens:1, audio:'#', picture:'#', comments:[]}, 
    {_id:'2', name:'Track2', artist:"Singer2", text:"Some text...", listens:0, audio:'#', picture:'#', comments:[]}, 
    {_id:'3', name:'Track3', artist:"Singer3", text:"Some text...", listens:5, audio:'#', picture:'#', comments:[]}, 

]


  return (
    <MainLayayout>
   <Grid container justifyContent='center'>
    <Card style={{width:900}}>
        <Box p={2}>
        <Grid container justifyContent='space-between'>
            <h1>Track list</h1>
            <Button onClick={()=>router.push('/tracks/create')}>Upload</Button>
        </Grid>
        </Box>
        <TrackList tracks={tracks}/>
    </Card>
   </Grid>
      
   
    </MainLayayout>
  )
}

export default Tracks
