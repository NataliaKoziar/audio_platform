import MainLayayout from '@/layouts/MainLayayout'
import { ITrack } from '@/types/track'
import { Button, Grid, TextField } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

const TrackId = () => {
const track:ITrack={"_id":"6450d02f602faba8a20d10d6","name":"music","artist":"Antutila","text":"...Some text2","listens":0,'picture':'gkgj', 'audio':'cjcjc',"comments":[{"_id":"6450df703c347f58ff39ef07","username":"Natalia","text":"...Some text2",},{"_id":"6450dfa53c347f58ff39ef0c","username":"Natalia","text":"...Simple comment!!!!!!!!",}]}
const router=useRouter()
  return (
    <MainLayayout>
        <Button 
        variant={'outlined'}
        style={{fontSize:32}}
        onClick={()=>router.push('/tracks')}>
           Back 
        </Button>
        <Grid container style={{margin:'20px 0'}}>
            <img src={track.picture} width={200} height={200} alt='img'/>
            <div style={{margin:'20px 0'}}>
                <h1>Track - {track.name}</h1>
                <h2>Artist - {track.artist}</h2>
                <h2>Listens - {track.listens}</h2>
            </div>
        </Grid>
        <h2>Words to track</h2>
        <p>{track.text}</p>
        <br />
        <h2>Comments</h2>
        <Grid container>
            <TextField
            label='Your name'
            fullWidth
            />
            <TextField
            label='Comment'
            fullWidth
            multiline
            rows={4}
            />
            <Button>Sent</Button>
        </Grid>
        <div>
            {track.comments.map((comment, index)=>
            <div key={index}>
                <div>Autor: {comment.username}</div>
                <div>Comment: {comment.text}</div>
            </div>
            )}
        </div>

    </MainLayayout>
  )
}

export default TrackId
