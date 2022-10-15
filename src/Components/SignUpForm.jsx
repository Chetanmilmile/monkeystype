import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { auth } from '../firebaseConfig';

const SignUpForm = ({handleClose}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = ()=>{
        if(!email || !password || !confirmPassword){
            alert("fill all the details");
            return;
        }
        if(password!==confirmPassword){
            alert("Password Mismatch");
            return;
        }
        auth.createUserWithEmailAndPassword(email,password).then((ok)=>{
            alert("account created");
            handleClose();
        }).catch((err)=>{
            alert("Not able to create account");
        });

        
    }

  return (
    <Box
     p={3}
     style={{
        padding:10,
        display:"flex",
        flexDirection:"column",
        gap:"20px",
        backgroundColor:"white"
     }}>
        <TextField
        variant="outlined"
        type="email"
        label="Enter email"
        onChange={(e)=> setEmail(e.target.value)}>

        </TextField>
        <TextField
        variant="outlined"
        type="password"
        label="Enter Password"
        onChange={(e)=> setPassword(e.target.value)}>

        </TextField>
        <TextField
        variant="outlined"
        type="password"
        label="Confirm Password"
        onChange={(e)=> setConfirmPassword(e.target.value)}>

        </TextField>

        <Button
        variant="contained"
        size="large"
        style={{backgroundColor:"red"}}
        onClick = {handleSubmit}>
            Sign Up

        </Button>

    </Box>
  )
}

export default SignUpForm