import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MainLayayout from '@/layouts/MainLayayout'
import StepWrapper from '@/components/StepWrapper'
import { Button, Grid } from '@mui/material'
import FirstStep from '@/components/FirstStep'
import UploadStep from '@/components/UploadStep'

const CreateTrack = () => {
 const [activeStep, setActiveStep]= useState(0)
 const [picture, setPicture] = useState(null)
 const [audio, setAudio] = useState(null)



 const next=()=>{
  if (activeStep!==2) setActiveStep(prev=>prev+1)
 }
 const back=()=>{
  setActiveStep(prev=>prev-1)
 }

  return (
    <MainLayayout>
      <StepWrapper activeStep={activeStep}>
      {activeStep===0 &&
       <FirstStep/>}
      {activeStep===1 && 
      <UploadStep  accept='image/*' setFile={setPicture}>
        <Button>Upload image</Button>
        </UploadStep>}
      {activeStep===2 && 
      <UploadStep accept='audio/*' setFile={setAudio}>
         <Button>Upload audio</Button>
        </UploadStep>}
      </StepWrapper>
      <Grid container justifyContent='space-between'>
        <Button disabled={activeStep===0} onClick={back}>Back</Button>
        <Button onClick={next}>Next</Button>
      </Grid>
    </MainLayayout>
  )
}



export default CreateTrack
