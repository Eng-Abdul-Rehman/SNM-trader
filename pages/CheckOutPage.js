const { Box, Typography, FormControl, InputLabel, Select, MenuItem, Button } = require("@mui/material");
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useContext, useState } from "react";
import { useRouter } from 'next/router';
import { Context } from './_app';

function CheckoutPage ()  {
const {counts, counts2, CardClose, CardClosed,TotalPrice} = useContext(Context)


const calculateTotal = (price, count) => {
  return (price * count).toFixed(2);
};
const calculateCardTotal = (price, count) => {
  return (price * count).toFixed(2);
};

console.log(counts,"Counts of Check", counts2,"Counts2 of Check", CardClose,"CardClose of Check", CardClosed,"CardClosed of Check")


    const countries = [
        { code: 'AF', name: 'Afghanistan' },
        { code: 'AL', name: 'Albania' },
        // Add more countries here...
      ];



    const history = useRouter();
    const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleLogin = () => {
      if (email === '') {
        setErrorMessage('Please fill in all the fields');
      } else {
        // Perform your login authentication logic here
        // For demonstration purposes, let's assume successful login
        // Redirect to the other page
        setErrorMessage('');
        history.push('/ThankYouPage');
      }
    };
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
      setErrorMessage('');
    };


    const [selectedCountry, setSelectedCountry] = useState('');

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };
    return(
        <>
        <Box sx={{width: '80%', margin: "auto"}}>
<Typography sx={{fontSize: 40, fontWeight: "bold", textAlign: "center"}}>
    Checkout
</Typography>
<Box sx={{marginTop: 16, width: "100%", display: "flex"}}>
<Box sx={{width: "60%"}}>
{errorMessage && (
        <Typography sx={{fontSize: 14, backgroundColor: "red", color: "white", padding: 1, width: "90%"}}>{errorMessage}</Typography>
)}
   <Typography sx={{fontSize: 18, fontWeight: "bold", marginY: 3}}>Billing details</Typography>
<Box sx={{display : "flex" }}>
    <Typography sx={{color: "#969696"}}>First name</Typography>
    <Typography sx={{color: "red", fontSize: 18, paddingLeft: 1}}>*</Typography>
</Box>
<input
    type="text"
    style={{padding: "15px", width: "90%", border: "1px solid #d6d6d6", borderRadius: "4px", marginTop: "16px", fontSize: "14px"}}
    placeholder=""
    onChange={handleEmailChange}
/>


<Box sx={{display : "flex", marginTop: 1 }}>
    <Typography sx={{color: "#969696"}}>Last name</Typography>
    <Typography sx={{color: "red", fontSize: 18, paddingLeft: 1}}>*</Typography>
</Box>
<input
    type="text"
    style={{padding: "15px", width: "90%", border: "1px solid #d6d6d6", borderRadius: "4px", marginTop: "16px", fontSize: "14px"}}
    placeholder=""
    onChange={handleEmailChange}
/>



<Box sx={{display : "flex", marginTop: 1 }}>
    <Typography sx={{color: "#969696"}}>Company name (optional)</Typography>
</Box>
<input
    type="text"
    style={{padding: "15px", width: "90%", border: "1px solid #d6d6d6", borderRadius: "4px", marginTop: "16px", fontSize: "14px"}}
    placeholder=""
/>




<Box sx={{display : "flex", marginTop: 1 }}>
    <Typography sx={{color: "#969696"}}>Country / Region </Typography>
    <Typography sx={{color: "red", fontSize: 18, paddingLeft: 1}}>*</Typography>
</Box>
<FormControl sx={{width: "93.6%"}}>
      
      <Select
        labelId="country-select-label"
        id="country-select"
        value={selectedCountry}
        onChange={handleChange}
      >
        {countries.map((country) => (
          <MenuItem key={country.code} value={country.code}>
            {country.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>




<Box sx={{display : "flex", marginTop: 1 }}>
    <Typography sx={{color: "#969696"}}>Street address</Typography>
    <Typography sx={{color: "red", fontSize: 18, paddingLeft: 1}}>*</Typography>
</Box>
<input
    type="text"
    style={{padding: "15px", width: "90%", border: "1px solid #d6d6d6", borderRadius: "4px", marginTop: "16px", fontSize: "14px"}}
    placeholder="Home number and street name "
    onChange={handleEmailChange}
/>
<input
    type="text"
    style={{padding: "15px", width: "90%", border: "1px solid #d6d6d6", borderRadius: "4px", marginTop: "16px", fontSize: "14px"}}
    placeholder="Apartment, suite, unit, etc. (optional) "
    onChange={handleEmailChange}
/>





<Box sx={{display : "flex", marginTop: 1 }}>
    <Typography sx={{color: "#969696"}}>Town / City</Typography>
    <Typography sx={{color: "red", fontSize: 18, paddingLeft: 1}}>*</Typography>
</Box>
<input
    type="text"
    style={{padding: "15px", width: "90%", border: "1px solid #d6d6d6", borderRadius: "4px", marginTop: "16px", fontSize: "14px"}}
    placeholder=""
    onChange={handleEmailChange}
/>





<Box sx={{display : "flex", marginTop: 1 }}>
    <Typography sx={{color: "#969696"}}>Postcode / ZIP</Typography>
    <Typography sx={{color: "red", fontSize: 18, paddingLeft: 1}}>*</Typography>
</Box>
<input
    type="text"
    style={{padding: "15px", width: "90%", border: "1px solid #d6d6d6", borderRadius: "4px", marginTop: "16px", fontSize: "14px"}}
    placeholder=""
    onChange={handleEmailChange}
/>


<Box sx={{display : "flex", marginTop: 1 }}>
    <Typography sx={{color: "#969696"}}>Phone</Typography>
    <Typography sx={{color: "red", fontSize: 18, paddingLeft: 1}}>*</Typography>
</Box>
<input
    type="text"
    style={{padding: "15px", width: "90%", border: "1px solid #d6d6d6", borderRadius: "4px", marginTop: "16px", fontSize: "14px"}}
    placeholder=""
    onChange={handleEmailChange}
/>

<Box sx={{display : "flex", marginTop: 1 }}>
    <Typography sx={{color: "#969696"}}>Email address</Typography>
    <Typography sx={{color: "red", fontSize: 18, paddingLeft: 1}}>*</Typography>
</Box>
<input
    type="text"
    style={{padding: "15px", width: "90%", border: "1px solid #d6d6d6", borderRadius: "4px", marginTop: "16px", fontSize: "14px"}}
    placeholder=""
    onChange={handleEmailChange}
/>



<Typography sx={{fontSize: 18, fontWeight: "bold", marginY: 3}}>Additional information</Typography>
<Box sx={{display : "flex", marginTop: 1,  }}>
    <Typography sx={{color: "#969696"}}>Order notes (optional)</Typography>
</Box>
<textarea
    type="text"
    style={{padding: "15px", width: "90%", border: "1px solid #d6d6d6", borderRadius: "4px",marginBottom: 20, marginTop: "16px", fontSize: "14px",'::placeholder': {
        color: '#c4c4c4', // Change the color to your desired color
      },}}
    placeholder="Notes about your order, e.g. special notes for delivery."
/>

</Box>






<Box sx={{width: "40%"}}>
<Typography sx={{fontSize: 18, fontWeight: "bold", marginY: 3}}>Billing details</Typography>
<Box sx={{padding: 2, border: "1px solid #bababa", backgroundColor: "#e8e8e8", width: "100%" }}>
<Box sx={{display: "flex", justifyContent: "space-between", width: "100%", borderBottom: "1px solid #bababa", paddingY: 1}}>
    <Typography sx={{fontSize: 15, fontWeight: "bold",}}>
    PRODUCT
    </Typography>
    <Typography sx={{fontSize: 15, fontWeight: "bold",}}>
    SUBTOTAL
    </Typography>
</Box>
                 {CardClose.map((item, index) => (
                    <Box key={item.id} sx={{width: "100%", display: "flex", marginTop: 1, justifyContent: "space-between"}}>
                       <Box sx={{width: "80%", display: "flex",}}> 
                         <Typography sx={{fontSize: 14}}>{item.Type}</Typography>
                         <Typography sx={{ fontSize: 14}}>x {counts[index]}</Typography>
                       </Box>
                      <Typography  sx={{fontSize: 14}}>${calculateTotal(item.Price, counts[index])}</Typography>
                    </Box>
                    ))} 
                    {CardClosed.map((item, index) => (   
                    <Box key={item.id} sx={{width: "100%", display: "flex", marginTop: 1, justifyContent: "space-between"}}>
                      <Box sx={{width: "80%", display: "flex",}}> 
                        <Typography sx={{fontSize: 14}}>{item.Type}</Typography>
                        <Typography sx={{ fontSize: 14, paddingLeft: 2}}>x {counts2[index]}</Typography>
                      </Box>
                        <Typography  sx={{fontSize: 14}}>${calculateCardTotal(item.Price, counts2[index])}</Typography>
                     </Box>
                    ))} 
                    <Box sx={{display: "flex", justifyContent: "space-between", padding: 2, borderBottom : "1px solid #bababa"}}>
                       <Typography sx={{fontSize:14}}>Subtotal</Typography>
                       <Typography sx={{fontSize: 14, color: "red"}}>{TotalPrice}</Typography>
                    </Box>
                    <Box sx={{display: "flex", justifyContent: "space-between", padding: 2, borderBottom: "1px solid #b3b3b3", borderTop: 0}}>
                       <Typography sx={{fontSize: 20, fontWeight: "bold"}}>Total</Typography>
                       <Typography sx={{fontSize: 19, fontWeight: "bold", color: "red"}}>{TotalPrice}</Typography>
                    </Box>
                    <Box sx={{marginTop: 2, backgroundColor: "#dbdbdb", padding: 3, display: "flex"}}>
                        <ChatBubbleOutlineIcon sx={{color: "#bababa", paddingY: 6, marginRight: 3, marginLeft: 1}} />
                        <Typography sx={{lineHeight: 2, paddingRight: 12}}>
                        Sorry, it seems that there are no available payment methods for your state. Please contact us if you require assistance or wish to make alternate arrangements.
                        </Typography>
                    </Box>

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
    Plasce order
</Button>

</Box>
</Box>
        </Box>
        </>
    )

}

export default CheckoutPage;