import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <Typography variant='h4'>Sign In</Typography>
        <TextField variant='outlined' label='Username'/> <br/>  <br/>
        <TextField variant='outlined' label='Password'/> <br/> <br/>
        <Button>Submit</Button>
    </div>
  )
}

export default Login