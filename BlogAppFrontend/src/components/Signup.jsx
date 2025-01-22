import { Button, TextField } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid2'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div style={{margin:'8%', textAlign:"center"}}>
        <Grid container spacing={2}>
            <Grid size={{ xs: 6, md: 6 }}>
            <TextField fullWidth label='Name' variant='outlined'></TextField>
            </Grid>
            <Grid size={{ xs: 6, md: 6 }}>
            <TextField fullWidth label='Email' variant='outlined'></TextField>
            </Grid>
            <Grid size={{ xs: 6, md: 6 }}>
            <TextField fullWidth label='Password' variant='outlined'></TextField>
            </Grid>
            <Grid size={{ xs: 6, md: 6 }}>
            <TextField fullWidth label='Phone' variant='outlined'></TextField>
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
            <TextField fullWidth label='Address' variant='outlined' multiline rows={4}></TextField>
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
            <Button color='error' variant='contained'>Register</Button>
            </Grid>
        </Grid>
        <br />
        <Grid>
              <Link to={'/'}>Already Registered? Login here</Link>
        </Grid>
    
    </div>
  )
}

export default Signup