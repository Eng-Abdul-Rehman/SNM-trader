import { RemoveRedEye } from "@mui/icons-material";
import { Box, Button, Checkbox, Typography } from "@mui/material";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { useState } from "react";
import { useRouter } from 'next/router';

export default function MyAccount () {
  const history = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      setErrorMessage('Please fill in all the fields');
    } else {
      // Perform your login authentication logic here
      // For demonstration purposes, let's assume successful login
      // Redirect to the other page
      setErrorMessage('');
      history.push('/');
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorMessage('');
  };
    return(
        <>
        <Box sx={{backgroundColor: "#d6d6d6", width: "99vw", height: "97.5vh", margin: 0, padding: 0}}>
            <Box sx={{width: "30%", margin: "auto"}}>
               <Typography sx={{fontSize: 40, fontWeight: "bold", textAlign: "center", paddingTop: 15}}>My account</Typography>
               <Typography sx={{fontSize: 32, fontWeight: "bold", textAlign: "center", paddingTop: 8}}>Log in</Typography>
               <Box sx={{padding: 3, backgroundColor: "white", height: "40%", marginTop: 5, borderRadius: 1.4}}>
                <Typography>Log In Your Account</Typography>
                <input
                            type="text"
                            style={{padding: "15px", width: "90%", border: "1px solid #d6d6d6", borderRadius: "4px", marginTop: "16px", fontSize: "14px"}}
                            placeholder="Username or Email Address"
                            onChange={handleEmailChange}
                          />
                          <box></box>
                          <input
                            type="text"
                            style={{padding: "15px", width: "90%", border: "1px solid #d6d6d6", borderRadius: "4px", marginTop: "16px", fontSize: "14px"}}
                            placeholder="Password"
                            onChange={handlePasswordChange}

                          />
                          {errorMessage && (
        <Typography color="error" sx={{fontSize: 12}}>{errorMessage}</Typography>
      )}
                          <Box sx={{display: "flex", justifyContent: "space-between"}}>
                          <Box sx={{display: "flex"}}>
                            <Checkbox sx={{paddingY: 1.5}}/>
                            <Typography sx={{paddingY: 2, fontSize: 14}}>Remember me</Typography>
                            </Box>
                            <Typography sx={{paddingY: 2, ":hover": {color: "#fcb900"}, fontSize: 14}}>Forgot your password?</Typography>
                          </Box>
                          <Button
                          onClick={handleLogin}
                           sx={{
                            textTransform: "capitalize",
                            backgroundColor: "#fcb800",
                            color: "black",
                            fontSize: 18,
                            fontWeight: "bold",
                            width: "100%",
                            height: "55px",
                            border: "none",
                            borderRadius: 1,
                            marginTop: 2,
                            ":hover": {
                              textTransform: "capitalize",
                              backgroundColor: "#fcb800",
                            },
                          }}>
Log in
                          </Button>
               </Box>
            </Box>
        </Box>
        </>
    )
}