import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    // var name = "Shamil"
    var [fname,setfname] = useState("Shamil")
    var [val,setVal] = useState()

    const changeName = ()=>{
        console.log("clicked")
        setfname(val)
        setVal("")
    }

    const InputHandler = (e)=>{
        console.log(e.target.value)
        setVal(e.target.value)
    }
  return (
    <div>
        <Typography>My Name is {fname} </Typography> <br/>
        <TextField variant='outlined' label='Enter Name' onChange={InputHandler} value={val}/> <br/>  <br/>
        <Button variant='contained' onClick={changeName}>Change</Button>
    </div>
  )
}

export default StateBasics