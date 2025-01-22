import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const[form,setForm]=useState({
    name:'',
    email:'',
    password:'',
    phone:'',
    address:''
  })
  const navigate=useNavigate();
  function capValue(){
    // console.log(form);
    axios.post('api/users/login',form).then((res)=>{
      alert(res.data.message);
      if(res.data.token){
        sessionStorage.setItem('logintoken',res.data.token);
        navigate('/blogs');
      } else {
        navigate('/');
      }
    }).catch((err)=>{
      alert('Invalid Login');
    })
  }
  return (
    <div style={{margin:'10%', textAlign:'center'}}>
    <Typography variant='h4' style={{color:'red', fontWeight:'bold'}}>BlogApp Login</Typography>
    <br /><br />
    <div>
    <TextField label='Email' variant='outlined' name='email' onChange={(e)=>{
      setForm({...form,email:e.target.value})
    }}></TextField>
    </div>
    <br /><br />
    <div>
    <TextField label='Password' variant='outlined' name='password' onChange={(e)=>{
      setForm({...form,password:e.target.value})
    }}></TextField>
    </div>
    <br /><br />
    <Button color='error' variant='contained' onClick={capValue}>Login</Button>
    <br /><br />
    <div>
        <Link to={'/signup'}>New user? Please Register here</Link>
    </div>

    </div>
  )
}

export default Login