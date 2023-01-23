import { Grid } from '@mui/material'
import React from 'react'
import Revenue from '../Section/Revenue'

const Dashboard = () => {
  return (
   <>
   <Grid container pr={1} py={2}>

    <Grid item lg={9} xs={12}>
        <Grid container sx={{height:"100%"}}>
            <Grid item  lg={4} xs={12} p={1}>
                <Revenue/>

            </Grid>
        </Grid>

    </Grid>

   </Grid>
   
   </>
  )
}

export default Dashboard