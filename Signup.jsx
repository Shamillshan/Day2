import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
         <Typography variant='h4'>Sign Up</Typography> <br/>
         <TextField variant='outlined' label='Name'/> <br/>  <br/>
         <TextField variant='outlined' label='Age'/> <br/> <br/>
         <TextField variant='outlined' label='Place'/> <br/> <br/>
         <TextField variant='outlined' label='Gender'/> <br/> <br/>
         <TextField variant='outlined' label='Email'/> <br/> <br/>
         <TextField variant='outlined' label='Password'/> <br/> <br/>
         <Button variant='contained'>Submit</Button>
    </div>
  )
}

export default Signup