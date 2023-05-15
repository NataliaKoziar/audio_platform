import { Grid, TextField } from '@mui/material'
import React from 'react'

const FirstStep = () => {
  return (
    <Grid container direction={'column'} style={{padding:20}}>
        <h2>Step 1</h2>
        <TextField
        style={{marginTop:'10px'}}
        label = {'Name'}
        />
        <TextField
        style={{marginTop:'10px'}}
        label = {'Artist'}
        />
        <TextField
        style={{marginTop:'10px'}}
        label = {'Text'}
        multiline
        rows={3}
        />
    </Grid>
  )
}

export default FirstStep
