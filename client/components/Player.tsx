import React from 'react'
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material'
import { Grid, IconButton } from '@mui/material'
import s from '../styles/Player.module.scss'
import { ITrack } from '@/types/track'
import Progress from './Progress'
const Player = () => {
const active = false

const track:ITrack={"_id":"6450d02f602faba8a20d10d6","name":"music","artist":"Antutila","text":"...Some text2","listens":0,'picture':'gkgj', 'audio':'cjcjc',"comments":[{"_id":"6450df703c347f58ff39ef07","username":"Natalia","text":"...Some text2",},{"_id":"6450dfa53c347f58ff39ef0c","username":"Natalia","text":"...Simple comment!!!!!!!!",}]}

  return (
    <div className={s.player}>
      <IconButton>
        {active
        ? <PlayArrow/>
        : <Pause/>}
      </IconButton>
     <Grid container direction='column' style={{width:200, margin:"0 20px"}}>
        <div>{track.name}</div>
        <div style={{fontSize:12, color:'gray'}}>{track.artist}</div>
      </Grid>
      <Progress left={0} right={100} onChange={()=>({})}/>
      <VolumeUp style={{marginLeft:"auto"}}/>
      <Progress left={0} right={100} onChange={()=>({})}/>
    </div>
  )
}

export default Player
