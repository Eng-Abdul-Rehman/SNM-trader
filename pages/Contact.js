import Footer from "@/components/Footer"
import { ArrowBack, AttachMoney, InboxOutlined, ShoppingBagOutlined, StorefrontOutlined } from "@mui/icons-material"
import { Box, Button, Grid, Typography } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"



const Contact = () => {
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
        history.push('/', alert("Send Successfully"));
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
                <Link href={"/"}>
          <ArrowBack sx={{fontSize: 30, margin: 2, color: "black"}} />
        </Link>
            <Box sx={{width: {md:"60%", sm: "80%", xs: "98%"}, margin: "auto"}}>
                <Box sx={{width: {md:"70%", sm: "86%", xs: "100%"}, margin: "auto"}}>
                <Typography sx={{fontSize: 40, fontWeight: "bold", color: "black", textAlign: "center"}}>Contact Us For Any Questions</Typography>
                </Box>
                <Box sx={{ marginTop: 10,paddingX: 2, paddingY: 8}}>
                    <Box sx={{display: "flex", justifyContent: "center"}}>
                    <Grid container lg={12} md={12} sm={12} xs={8} gap={16} textAlign={"center"} justifyContent={"center"}>
                        <Box sx={{ textAlign: "center", width: 260}}>
                            <Typography sx={{fontSize: 24, fontWeight: "bold", color: "black"}}>Contact Directly</Typography>
                            <Typography sx={{fontSize: 15, color: "#6e6e6e", marginTop: 2}}>contact@Yahia-llc.com</Typography>
                        </Box>
                       
                        <Box sx={{ textAlign: "center", width: 260}}>
                            <Typography sx={{fontSize: 24, fontWeight: "bold", color: "black"}}>Head Quater</Typography>
                            <Typography sx={{fontSize: 15, color: "#6e6e6e", marginTop: 2}}>Emerald Cir, Durham, NC 27713,North Carolina United States</Typography>
                        </Box>

                        <Box sx={{ textAlign: "center", width: 260}}>
                            <Typography sx={{fontSize: 24, fontWeight: "bold", color: "black"}}>Work With Us</Typography>
                            <Typography sx={{fontSize: 15, color: "#6e6e6e", marginTop: 2}}>Send your CV to our email:career@Yahia-llc.com</Typography>
                        </Box>

                        <Box sx={{ textAlign: "center", width: 260}}>
                            <Typography sx={{fontSize: 24, fontWeight: "bold", color: "black"}}>Customer Service</Typography>
                            <Typography sx={{fontSize: 15, color: "#6e6e6e", marginTop: 2}}>customercare@Yahia-llc.com +1-919-400-7170</Typography>
                        </Box>

                        <Box sx={{ textAlign: "center", width: 260}}>
                            <Typography sx={{fontSize: 24, fontWeight: "bold", color: "black"}}>Media Relations</Typography>
                            <Typography sx={{fontSize: 15, color: "#6e6e6e", marginTop: 2}}>media@Yahia-llc.com</Typography>
                        </Box>

                        <Box sx={{ textAlign: "center", width: 260}}>
                            <Typography sx={{fontSize: 24, fontWeight: "bold", color: "black"}}>Vendor Support</Typography>
                            <Typography sx={{fontSize: 15, color: "#6e6e6e", marginTop: 2}}>vendorsupport@Yahia-llc.com</Typography>
                        </Box>
                        
                
                </Grid>
                </Box>
                </Box>
            </Box>
            <Box sx={{backgroundColor: "#f6f6f6 ", width: "100%"}}>
             <Box sx={{width: {md:"60%", sm: "80%", xs: "98%"}, margin: "auto",paddingY: 20, marginTop: 10 }}>
              <Box sx={{width: {md:"70%", sm: "86%", xs: "100%"}, margin: "auto"}}>
                <Typography sx={{fontSize: 40, fontWeight: "bold", color: "black", textAlign: "center"}}>Get In Touch with Yahia-llc.com</Typography>
              </Box>
              <Box sx={{marginTop: 10}}>
               {errorMessage && (
                 <Typography color="error" sx={{fontSize: 18}}>{errorMessage}</Typography>
              )}
              <Box sx={{display: "flex", gap: 2}}>
           <input
            type="text"
            style={{padding: "15px", width: "50%", border: "1px solid #d6d6d6", borderRadius: "4px", marginTop: "16px", fontSize: "14px"}}
            placeholder="Name*"
            onChange={handlePasswordChange} 
            />  
            <input
            type="text"
            style={{padding: "15px", width: "50%", border: "1px solid #d6d6d6", borderRadius: "4px", marginTop: "16px", fontSize: "14px"}}
            placeholder="Email*"
            onChange={handlePasswordChange} 
            /> 
            </Box>
            <input
            type="text"
            style={{padding: "15px", width: "100%", border: "1px solid #d6d6d6", borderRadius: "4px", marginTop: "16px", fontSize: "14px"}}
            placeholder="Subject(Optinal)"
            onChange={handleEmailChange} 
            /> 
            <textarea
    type="text"
    style={{padding: "15px", width: "100%", border: "1px solid #d6d6d6", borderRadius: "4px",marginBottom: 20, marginTop: "16px", fontSize: "14px",'::placeholder': {
        color: '#c4c4c4', // Change the color to your desired color
      },}}
    placeholder="Message"
/>
              </Box>
              <Button
                onClick={handleLogin}
                sx={{
                textTransform: "capitalize",
                backgroundColor: "#fcb800",
                color: "black",
                fontSize: 18,
                fontWeight: "bold",
                width: "20%",
                height: "55px",
                border: "none",
                borderRadius: 1,
               marginTop: 2,
                ":hover": {
               textTransform: "capitalize",
               backgroundColor: "#fcb800",
             },
            }}> Post Comment</Button>
             </Box>
            </Box>
<link
  rel="stylesheet"
  id="bootstrap-css"
  href="css/bootstrap.min.css"
  type="text/css"
  media="all"
/>
<link
  rel="stylesheet"
  id="martfury-css"
  href="css/style.css"
  type="text/css"
  media="all"
/>
<Box sx={{marginTop:0}}>
<Footer />
</Box>
        </>
    )
}

export default Contact