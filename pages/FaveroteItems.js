import { KeyboardBackspace } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { Context } from "./_app";
import CloseIcon from '@mui/icons-material/Close';
import Link from "next/link";


function FaveroteItems() {
  const { datafav, removeData, SendAddToCard } = useContext(Context);
    
    return(
<>
<Box sx={{ width: '70%', margin: "auto"}}>
            <Box sx={{textAlign: "center", marginTop: 10}}>
                <Typography sx={{fontSize: 50 , fontWeight: "bold"}}>Wishlist</Typography>
            </Box>
            <Box sx={{backgroundColor: "#e6e6e6", borderBottom: "1px solid #c4c4c4", paddingY: 1, display: {md:"flex", xs: "none"}, marginTop: {md:12, xs: 20}}}>
                <Box sx={{width: "40%", textAlign: "center"}}>
                  <Typography  sx={{  fontWeight: "bold"}}>PRODUCT</Typography>
                </Box>
                <Box sx={{width: "26%", textAlign: "center", }}>
               <Typography  sx={{  fontWeight: "bold", paddingRight: 2}}>	PRICE</Typography>
                </Box>
                <Box sx={{width: "35%", textAlign: "start"}}>
                  <Typography  sx={{  fontWeight: "bold", paddingRight: 2}}>STOCK STATUS</Typography>
                </Box>
            </Box>
            {datafav.map((item) => (
          <Box key={item.id} sx={{ width: "100%", display: {md:"flex", xs: "block"},borderBottom: "1px solid #c4c4c4" , marginY: 2, marginLeft: 2}}>
            <Box sx={{display:  "flex"}}>
            <Box sx={{ width: {md:"9%", xs: "9%"}, textAlign: "start", marginY: 3 }}>
              <IconButton onClick={() => removeData(item)} sx={{marginTop: 3, margin: 0, padding: 0.5}}>
                 <CloseIcon  />
              </IconButton>
            </Box>
            <Box sx={{ width: {md:"80%", xs: "100%"}, textAlign: "start", display: "flex" }}>
              <img width={80} height={90} src={item.Image} alt="image of Product" />
              <Typography sx={{fontSize : 15, marginY: 2}}>{item.Type}</Typography>
            </Box>
            </Box>
            <Box sx={{ width: {md:"20%", xs: "100%"}, textAlign: "end" }}>
              <Typography sx={{ color: "#cc0000", marginY: 2, paddingRight: 6 }}>${item.Price}</Typography>
            </Box>
            <Box sx={{ width: {md:"30%", xs: "100%"}, textAlign: "center" }}>
              <Typography sx={{ color: "#669900", marginY: 2 }}>{item.Instock}</Typography>
            </Box>
            <Box sx={{ width: {md:"25%", xs: "100%"}, textAlign: "start" }}>
            <Button
            onClick={() => SendAddToCard(item)}
                      sx={{
                        textTransform: "capitalize",
                        backgroundColor: "#fcb800",
                        color: "black",
                        fontSize: 18,
                        fontWeight: "bold",
                        width: "160px",
                        height: "45px",
                        border: "none",
                        borderRadius: 1,
                        marginY: 2,
                        ":hover": {
                          textTransform: "capitalize",
                          backgroundColor: "#fcb800",
                        },
                      }}
                    >
                      Add to Card
                    </Button>
            </Box>
          </Box>
        ))}
        <Link href="/">
            <Button
             sx={{
                textTransform: "capitalize",
                backgroundColor: "#fcb800",
                color: "black",
                fontSize: 18,
                fontWeight: "bold",
                width: "180px",
                height: "45px",
                border: "none",
                borderRadius: 1,
                marginY: 2,
                ":hover": {
                  textTransform: "capitalize",
                  backgroundColor: "#fcb800",
                },
              }}><KeyboardBackspace sx={{paddingRight: 1}} /> Back To Shop</Button>
              </Link>
        </Box>
</>
    )
}
export default FaveroteItems;